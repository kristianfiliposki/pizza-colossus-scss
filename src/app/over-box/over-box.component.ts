import { pizza } from '../../interfaces';
import { Component, Input, Output ,EventEmitter,inject} from '@angular/core';
import { MakepizzaService } from '../makepizza.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-over-box',
  templateUrl: './over-box.component.html',
  styleUrl: './over-box.component.css'
})
export class OverBoxComponent {
  constructor(private MakepizzaService: MakepizzaService) {
  }


  @Input() selected ?: boolean;
  @Output() cancel= new EventEmitter();
  @Output() add = new EventEmitter<pizza>();



  ingredient: string="";
  ingredienti: string[]=[
    "sugo",
    "mozzarella",
    "salsiccia",
    "salame",
    "peperoni",
    "mortadella",
    "alici",
    "patate",
    "Gorgonzola",
    "basilico",

  ];


  pizze=this.MakepizzaService.ListaDaAggiornare;
  enteredId=this.pizze.length;
  prezzofinale:number=0;
  enteredImg="/pizze/default.jpeg";
  enteredNome='';
  enteredPrezzo=10;
  enteredIngredienti: string[]=[];

  calc(){
   this.prezzofinale= (4 + (1.5 * this.enteredIngredienti.length));
   return this.prezzofinale;

  }

  addIngredients(element:string) {
    this.ingredient=element;
    this.enteredIngredienti.push(this.ingredient)
    console.log(this.enteredIngredienti)
  }


  visiblee(){
      console.log(this.selected)
      this.selected= true;
      return this.selected;
  }

  Oncancel(){
    this.cancel.emit(this.visiblee())
  }

  invio(){
    console.log("invio")
    console.log(this.enteredId)
    this.add.emit({
      id:this.enteredId++,
      img:this.enteredImg,
      nome:this.enteredNome,
      prezzo:this.calc(),
      ingredienti:this.enteredIngredienti,
    })
  }

}
