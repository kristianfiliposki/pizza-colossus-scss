import { NgModule, ViewEncapsulation } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { provideHttpClient } from '@angular/common/http';

/* componenti */
import { HeaderComponent } from "../header/header.component";
import { CaroselComponent } from "../carosel/carosel.component";
import { MainComponent } from "../main/main.component";
import { ListPizzeComponent } from './../list-pizze/list-pizze.component';
import { FooterComponent } from '../footer/footer.component';
import { OverBoxComponent } from "../over-box/over-box.component";
import { AppComponent } from "./app.component";
import { OperatoreComponent } from "../operatore/operatore.component";
import { CasellaComponent } from '../shared/casella/casella.component';
import { SalutaDirective } from "../saluta.directive";
import { PricePipe } from "../price.pipe";
import { UpdateFormComponent } from "../update-form/update-form.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PricePipe,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    OperatoreComponent,
    OverBoxComponent,
    ListPizzeComponent,
    CaroselComponent,
    FooterComponent,
    CasellaComponent,
    SalutaDirective,
    UpdateFormComponent,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule { }
