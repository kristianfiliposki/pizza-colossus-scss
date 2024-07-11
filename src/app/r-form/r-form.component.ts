import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
FormsModule


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
    OnSubmit(form:NgForm){
      console.log(form)
    }
}
