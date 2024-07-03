import { Component, model } from '@angular/core';

@Component({
  selector: 'app-casella',
  templateUrl: './casella.component.html',
  styleUrl: './casella.component.scss',

  host:{
    '(click)':'onClick()',
  }
})
export class CasellaComponent {
  prova= model.required<string>();

  onClick(){
    console.log("host funziona")
  }
}
