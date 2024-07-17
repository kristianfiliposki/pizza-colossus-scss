import { type pizza } from './../../interfaces';
import { Component, OnInit, computed, effect, inject, Input, signal, } from '@angular/core';
import { MakepizzaService } from '../makepizza.service';
import { Observable, Subscription, catchError, of, throwError, } from 'rxjs';
import { CallService } from '../call.service';
import { type Beer } from '../beer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-pizze',
  templateUrl: './list-pizze.component.html',
  styleUrl: './list-pizze.component.css'
})
export class ListPizzeComponent implements OnInit{
  /* services */
  private CallService= inject(CallService);
  private MakepizzaService= inject(MakepizzaService);
  constructor(private router: Router,private route: ActivatedRoute) {}

  selected(id:number){
    console.log(id)
    this.router.navigate(['/menu', id]);  }


    /* dati */
    modify :boolean = false;
    datoDaModificare=0;
    listapizze=this.MakepizzaService.listaPizze;
    /*  listaBar :Beer[] | undefined=this.CallService.Bars*/
    error=signal('');
    Bars:Beer[]=[];
    birrerie = signal<Beer[] | undefined>(undefined);
    Birrerie$: Observable<Beer[] | undefined>= of(this.Bars);
    private httpClient = inject(HttpClient);
    delete=this.MakepizzaService.prendiPizza;
    id=this.MakepizzaService.selected;
    PizzaName="";
    @Input() rdato ?: string;



    ClickModify(){
      this.modify = !this.modify;
      console.log(this.modify)
    }

    update(){
      console.log(this.MakepizzaService.listaPizze)
    }
    cercaID(){
      this.route.paramMap.subscribe({
        next:(param)=>{
          const pizzaID= Number(param.get('pizzaId'))
          this.PizzaName=
          this.MakepizzaService.ListaDaAggiornare.find((p)=>p.id=== pizzaID)!.nome
        }
      }

    )
  }

  ngOnInit() {
    // Esegui la chiamata per ottenere i dati
    console.log(this.route)


    this.cercaID();





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
