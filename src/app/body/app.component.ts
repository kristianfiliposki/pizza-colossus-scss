import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../beer';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit{
  title = 'pizza-colossus';
  places= signal<Beer | undefined>
  private httpClient = inject(HttpClient);

  ngOnInit() {
  const subscription = this.httpClient.get<{places: Beer}>('https://api.openbrewerydb.org/v1/breweries/{obdb-id}').subscribe({
    next:(response)=>{console.log(response.places.name)}
  })

}

}
