import { Injectable, signal } from '@angular/core';
import { type pizza } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakepizzaService {
constructor() { }

  ListaDaAggiornare :pizza[]=[
    {
      id:0,
      img:'/pizze/pizza2.jpeg',
      nome:"boscaiola",
      prezzo:7,
      ingredienti:[
        "sugo",
        "mozzarella",
      ],
    },
    {
      id:1,
      img:'/pizze/pizza5.jpeg',
      nome:"zucchine",
      prezzo:9,
      ingredienti:[
        "sugo",
        "salame",
        "mozzarella",
      ],
    },
    {
      id:2,
      img:'/pizza.jpeg',
      nome:"amatriciana",
      prezzo:10,
      ingredienti:[
        "prosciutto ",
        "cotto",
        "olive",
        "carciofini ",
        "sott'olio ",
        "pomodori ",
        "basilico",
        "funghi",

      ],
    },
    {
      id:3,
      img:'/pizze/pizza3.jpeg',
      nome:"patate",
      prezzo:2,
      ingredienti:[
        "ciao"
      ],
    },
  ];
  pizze$ = new BehaviorSubject<pizza[]>(this.ListaDaAggiornare);

  SignalPizze = signal(this.ListaDaAggiornare);
  listaPizze=this.SignalPizze();

  booleano :boolean = false;
  modify=signal(this.booleano);

  /* questo è il dato che conterrà la pizza dell'utente */
  element: pizza = {
    id: 0,
    img:"",
    nome: "",
    prezzo: 0,
    ingredienti: [],
  };
  /* mostra se il form è visibile o meno */
  visible ?: boolean = true;


    aggiungiPizza(value:pizza){

      this.listaPizze=[...this.listaPizze, value];
      this.pizze$.next(this.listaPizze)
      console.log(this.listaPizze)
    }




  /* prende il booleano sparato da over-box, che permetterà di rendere visibile la finestra di creazione pizza */
  FormVisible(){
    this.visible= false;
    console.log(this.visible)
  }

  FormClose(value:boolean){
    this.visible=value;
  }


    prendiId(pizze: pizza[], value: pizza){
      let IdpizzaSelezionata = pizze.findIndex(pizza => pizza.id === value.id);
      console.log(IdpizzaSelezionata);

    }

    prendiPizza(pizze: pizza[], value: pizza) {
      let listaDaAggiornare = pizze.findIndex(pizza => pizza.id === value.id);
      console.log(listaDaAggiornare);

      if (listaDaAggiornare !== -1) {
         pizze.splice(listaDaAggiornare, 1); // Ad esempio, per rimuovere la pizza
      } else {
        console.log("Pizza non trovata");
      }

      console.log("mmm");

    }

    modificaPizza(booleano: boolean , value: pizza) {

    }

}
