import { Component, } from '@angular/core';
import { MakepizzaService } from '../makepizza.service';
import { Observable, } from 'rxjs';
@Component({
  selector: 'app-list-pizze',
  templateUrl: './list-pizze.component.html',
  styleUrl: './list-pizze.component.css'
})
export class ListPizzeComponent {
  constructor(private MakepizzaService: MakepizzaService) {
  }

  modify :boolean = false;
  datoDaModificare=0;


osservatore$ = new Observable<number>((subscriber) => {
  subscriber.next(43);
  subscriber.next(2112);
  subscriber.complete();
});

/* TODO CAPISCILO SUBSCRIVI. */
ngOnInit() {
  console.log(this.MakepizzaService.listaPizze);
  console.log("coiap");

  const subscription = this.osservatore$.subscribe({
    next: (ciao: number) => console.log(ciao),
    complete: () => console.log("funziona"),
  });
}

  /*     const subscription=this.MakepizzaService.pizze$.subscribe((value)=>
        {
          console.log(value);
          this.listapizze=value;

        }) */
      /* sottiscrivere= ascoltare i cambiamenti */

  ClickModify(){
    this.modify = !this.modify;
    console.log(this.modify)
  }

  update(){
    console.log(this.MakepizzaService.listaPizze)
  }

  listapizze=this.MakepizzaService.listaPizze;

  id=this.MakepizzaService.prendiPizza;

}
