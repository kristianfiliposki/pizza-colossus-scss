import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';


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
  /* dati */
  EnteredName=signal("");
  EnteredEmail=signal("");

    OnSubmit(form:NgForm){
      console.log(form.value)
      this.EnteredName.set(form.value.nome);
      this.EnteredEmail.set(form.value.email);
    }
}
