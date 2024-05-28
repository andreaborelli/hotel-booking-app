import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { RateComponent } from './components/rate/rate.component';
import { StarsComponent } from './components/stars/stars.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoResultsComponent } from './no-results.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    GmapComponent,
    ServicesComponent,
    ImageGalleryComponent,
    ReservationsComponent,
    HotelFormComponent,
    ContactFormComponent,
    HotelListComponent,
    RateComponent,
    StarsComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // vengono utilizzati i componenti di questo modulo
    // RouterModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
