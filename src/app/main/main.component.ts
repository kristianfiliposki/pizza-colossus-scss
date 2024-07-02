import { chefs } from '../../chefs';
import { Component} from '@angular/core';
import { user, type pizza } from '../../interfaces';
import { MakepizzaService } from '../makepizza.service';
@Component({
  selector: 'app-main',

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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


/* ----- ----- ----- ----- pizze dei chef ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */


  /* istanzio il dato delle pizze relazionate ai chef  */
/*   dato ?: pizza[];
 */
  /* prende i dati sparati da OperatoreComponent. Per fornire le pizze degli operatori. */
/*   putdati(value: user) {
    console.log(value.pizze);
    this.dato = value.pizze;
    return this.dato;
  }
 */
/* ----- ----- ----- ----- pizze dei chef ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */


/* local storage */

/*    savePizza() {
    localStorage.setItem('pizza', JSON.stringify(this.pizza()));
  } */

/*   constructor() {
    this.savePizza();
    const pizza = localStorage.getItem('pizza');
    if (pizza) {
      this.pizza = JSON.parse(pizza);
    }
  } */

}



