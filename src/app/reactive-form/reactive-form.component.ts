import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
  host:{
    "class": "host",
  }
})
export class ReactiveFormComponent {
  /* DATI */
  EnteredName=signal("");
  EnteredEmail=signal("");

  form=new FormGroup({
    name:new FormControl("",
      {validators:[ Validators.required]}),
    email:new FormControl("",
      {validators:[ Validators.email]},
    ),
  })

  Onsubmit(){
    console.log(this.form.value)
    const EnteredName= this.form.value.name;
    const EnteredEmail= this.form.value.email;
    this.EnteredName.set(EnteredName!)
    this.EnteredEmail.set(EnteredEmail!)
  }
}
