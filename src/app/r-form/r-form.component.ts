import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MakepizzaService } from '../makepizza.service';


@Component({
  selector: 'app-r-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './r-form.component.html',
  styleUrl: './r-form.component.scss',
  host:
  {
  "class": "form",
  }
})
export class RFormComponent {
  service=inject(MakepizzaService)
  /* dati */
  EnteredName=signal("");
  EnteredEmail=signal("");
  isLogged=this.service.isLogged;

    OnSubmit(form:NgForm){
      this.isLogged.set(true);
      console.log(form.value)
      this.EnteredName.set(form.value.nome);
      this.EnteredEmail.set(form.value.email);
    }
}
