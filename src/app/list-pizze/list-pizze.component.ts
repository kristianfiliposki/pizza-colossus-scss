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
  listapizze=this.MakepizzaService.ListaDaAggiornare;
  id=this.MakepizzaService.prendiPizza;
}
