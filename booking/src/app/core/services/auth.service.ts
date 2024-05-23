import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Auth} from '../../model/auth';
import {Router} from '@angular/router';
import { catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

data: Auth | null = null; // data type Auth
error: HttpErrorResponse | null = null; // error type HttpErrorResponse

constructor(
  private http: HttpClient,
  private router: Router
) {}

login({user, pass}: {user: string, pass: string}) { // login function
  this.error = null; // reset error

  const params = new HttpParams()
    .set('user', user)
    .set('pass', pass);
  /*
  // ORGINAL VERSION
  this.http.get<Auth>(`http://localhost:3000/login`, { params })
    .subscribe(
      res => {
        this.data = res;
        this.router.navigateByUrl('search');
      },
      err => this.error = err
    );
  */

  // VERIONE Angular 13.2 & RxJS 7.5
this.http.get<Auth>(`http://localhost:3000/login`, { params }) // call http request
.pipe(
  catchError(err => of(err)) // catch error
)
.subscribe((res: Auth | HttpErrorResponse) => {
  if (res instanceof HttpErrorResponse) {
    this.error = res
  } else {
    this.data = res;
    this.router.navigateByUrl('search'); // redirect to search page after login
  }
});
}

logout() {
this.data = null;
this.router.navigateByUrl('login'); // redirect to login page after logout
}

isLogged() {
return !!(this.data && this.data.token); // check if token is present is logged true else false
}
}
