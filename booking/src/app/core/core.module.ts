import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [
        RouterModule,
        CommonModule, // è un modulo che espone le direttive di base di Angular come *ngIf, *ngFor, ecc.
        SharedModule,
    ]
})
export class CoreModule{

}
