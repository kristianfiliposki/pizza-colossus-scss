import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {  HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

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
import { RFormComponent } from "../r-form/r-form.component";

function logginInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
){
  const req= request.clone(
    {
      headers:request.headers.set('ciao' , "sdajsad")
    }
  );
  console.log(request)
  return next(request)
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PricePipe,
    RFormComponent
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
  providers: [
    provideHttpClient(
      withInterceptors([logginInterceptor])
    )
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
