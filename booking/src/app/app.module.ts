import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IntToArrayPipe } from './shared/pipes/int-to-array.pipe';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { SeparatorComponent } from './shared/components/separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    IntToArrayPipe,
    HotelListComponent,
    HotelFormComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
