import { Component } from '@angular/core';
import { MakepizzaService } from '../makepizza.service';
@Component({
  selector: 'app-list-pizze',
  templateUrl: './list-pizze.component.html',
  styleUrl: './list-pizze.component.css'
})
export class ListPizzeComponent {
  constructor(private MakepizzaService: MakepizzaService) {
  }

  modify :boolean = false;

  ClickModify(){
    this.modify = !this.modify;
    console.log(this.modify)
  }

  listapizze=this.MakepizzaService.ListaDaAggiornare;
  id=this.MakepizzaService.prendiPizza;
}
