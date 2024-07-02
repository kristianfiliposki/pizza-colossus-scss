import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/* componenti */
import { HeaderComponent } from "../header/header.component";
import { CaroselComponent } from "../carosel/carosel.component";
import { MainComponent } from "../main/main.component";
import { ListPizzeComponent } from './../list-pizze/list-pizze.component';
import { FooterComponent } from '../footer/footer.component';
import { OverBoxComponent } from "../over-box/over-box.component";
import { AppComponent } from "./app.component";
import { OperatoreComponent } from "../operatore/operatore.component";


@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    MainComponent,
    OperatoreComponent,
    OverBoxComponent,
    ListPizzeComponent,
    CaroselComponent,
    FooterComponent,
  ],
  imports:[
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  bootstrap:[ AppComponent],
})
export class AppModule{

}
