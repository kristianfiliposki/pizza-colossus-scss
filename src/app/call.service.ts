import { observable } from './../../node_modules/rxjs/src/internal/symbol/observable';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor() { }

  error=signal('');
  Bars:Beer[]=[];
  birrerie = signal<Beer[] | undefined>(undefined);
  Birrerie$: Observable<Beer[] | undefined>= of(this.Bars);
  private httpClient = inject(HttpClient);


  subscription(){
    return this.httpClient.get<Beer[]>('https://api.openbrewerydb.org/v1/breweries')
  }
}
