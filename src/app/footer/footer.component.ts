import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  /* l'interfaccia serve a dare errore se non c'è On init, VOGLIAMO PIÙ CONTROLLO!!! */

  /* NgOnInit esempio, si preferisce usarlo anzichè mettere cose nel costruttore */
  ngOnInit() {
  console.log("Ng funziona durante l'inizializzazione del componente.")
  }
}
