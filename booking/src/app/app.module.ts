import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { GmapComponent } from './features/search/components/gmap/gmap.component';
import { ContactFormComponent } from './features/search/components/contact-form/contact-form.component';
import { RatesComponent } from './features/search/components/rates/rates.component';
import { ReservationsComponent } from './features/search/components/reservations/reservations.component';
import { ServicesComponent } from './features/search/components/services/services.component';
import { ImageGalleryComponent } from './features/search/components/image-gallery/image-gallery.component';
import { StarsComponent } from './features/search/components/stars/stars.component';
import { NoResultsComponent } from './features/search/no-results.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    HotelListComponent,
    HotelFormComponent,
    GmapComponent,
    ContactFormComponent,
    RatesComponent,
    ReservationsComponent,
    ServicesComponent,
    ImageGalleryComponent,
    StarsComponent,
    NoResultsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
