import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoResultsComponent } from './features/search/no-results.component';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { LoginModule } from './features/login/login.module';
import { SearchModule } from './features/search/search.module';

@NgModule({
  declarations: [
    AppComponent,

    NoResultsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // SharedModule,
    CoreModule,
    CartModule,
    LoginModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
