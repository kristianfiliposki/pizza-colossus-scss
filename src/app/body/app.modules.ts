import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {  HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterOutlet, provideRouter , Routes, RouterLink, withComponentInputBinding} from "@angular/router";

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
import { ReactiveFormComponent } from "../reactive-form/reactive-form.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { routes } from "./app.routes";

function logginInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
){
  const req= request.clone(
    {
      headers:request.headers.set('ciao' , "siamo gli intercettori")
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
    RFormComponent,
    ReactiveFormComponent,
    RouterOutlet,
    RouterLink,
    NotFoundComponent,
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
    provideRouter(
      routes,
      withComponentInputBinding(),
    ),
    provideHttpClient(
      withInterceptors([logginInterceptor])
    )
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
