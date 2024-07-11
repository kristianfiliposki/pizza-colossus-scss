import { type pizza } from './../../interfaces';
import { Component, OnInit, effect, inject, signal, } from '@angular/core';
import { MakepizzaService } from '../makepizza.service';
import { Observable, catchError, of, throwError, } from 'rxjs';
import { CallService } from '../call.service';
import { type Beer } from '../beer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-pizze',
  templateUrl: './list-pizze.component.html',
  styleUrl: './list-pizze.component.css'
})
export class ListPizzeComponent implements OnInit{
  /* services */
  private CallService= inject(CallService);
  private MakepizzaService= inject(MakepizzaService);

  /* dati */
  modify :boolean = false;
  datoDaModificare=0;
  listapizze=this.MakepizzaService.listaPizze;
/*   listaBar :Beer[] | undefined=this.CallService.Bars*/
  error=signal('');
  Bars:Beer[]=[];
  birrerie = signal<Beer[] | undefined>(undefined);
  Birrerie$: Observable<Beer[] | undefined>= of(this.Bars);
  private httpClient = inject(HttpClient);
  id=this.MakepizzaService.prendiPizza;




  ClickModify(){
    this.modify = !this.modify;
    console.log(this.modify)
  }

  update(){
    console.log(this.MakepizzaService.listaPizze)
  }

  ngOnInit() {
    // Esegui la chiamata per ottenere i dati
    this.CallService.subscription()
    .pipe(catchError((error)=>throwError(()=> new Error("funziona l' errore"))))
    .subscribe({
      next:(response)=>{
        this.birrerie.set(response);
        this.Birrerie$=of(response);
        console.log(this.birrerie())
      },
      error: (error)=>{
        this.error.set(error)
      },
    });
  }
}
