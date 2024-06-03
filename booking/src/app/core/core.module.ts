import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from './components/footer.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    exports: [NavbarComponent, FooterComponent],
    imports: [
        RouterModule,
        CommonModule, // è un modulo che espone le direttive di base di Angular come *ngIf, *ngFor, ecc.
        SharedModule,
    ]
})
export class CoreModule{

}
