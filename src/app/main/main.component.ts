import { chefs } from '../../chefs';
import { Component, ElementRef, OnInit, signal } from '@angular/core';
import { type pizza } from '../../interfaces';
import { MakepizzaService } from '../makepizza.service';
import { ViewChild } from '@angular/core';
import { OverBoxComponent } from '../over-box/over-box.component';

@Component({
  selector: 'app-main',

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  @ViewChild('TITOLO') nomeNuovo?:ElementRef;


  /* in questa fase del componente sono già stati i contenuti  */
  ngAfterViewInit(){
      let variabile = this.nomeNuovo!.nativeElement.textContent='Crea la tua pizza: Scegli il tuo chef e la sua migliore pizza!';
/*    let SignalVariabile= signal(variabile);
      SignalVariabile.set("cuaio");
 */   console.log(variabile);
  }



  /* questi sono tutti i chef che lavorano per la nostra compagnia */
  public operatori = chefs;

  constructor(private MakepizzaService: MakepizzaService) {
  }

  listapizze=this.MakepizzaService.ListaDaAggiornare
  pizza = this.MakepizzaService.pizza;
  /* questo è il dato che conterrà la pizza dell'utente */


  /* Prende i dati sparati dal form che crea la pizza */
  add(value:pizza){
    this.MakepizzaService.aggiungiPizza(value);
    this.visible=true;
  }


  /* mostra se il form è visibile o meno */
  visible ?: boolean = true;

  /* prende il booleano sparato da over-box, che permetterà di rendere visibile la finestra di creazione pizza */
  visiblee(){
    this.visible= false;
    console.log(this.visible)
  }

  /* prende il booleano sparato da over-box, che permetterà di NON rendere visibile la finestra di creazione pizza */
  cancel(value:boolean){
    this.visible=value;
  }




/* local storage */

   savePizza() {
    localStorage.setItem('pizza', JSON.stringify(this.pizza()));
  }

ngOnInit(){
  this.savePizza();
  const pizza = localStorage.getItem('pizza');
  if (pizza) {
    this.pizza = JSON.parse(pizza);
    console.log(pizza)
    }
}
}



