import { NgModule } from "@angular/core";
import { IntToArrayPipe } from "./pipes/int-to-array.pipe";
import { CardComponent } from "./components/card/card.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { CommonModule } from "@angular/common";
import { NewsLetterFormComponent } from "../features/search/components/news-letter-form/news-letter-form.component";
import { FormsModule } from "@angular/forms";

const components = [
  IntToArrayPipe,
  CardComponent,
  SeparatorComponent,
  NewsLetterFormComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
   CommonModule, // è un modulo che espone le direttive di base di Angular come *ngIf, *ngFor, ecc.
   FormsModule

  ]})
export class SharedModule{

}
