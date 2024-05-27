import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ], // no exports perchè non è un modulo condiviso, ma usa il routing
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class LoginModule { }
