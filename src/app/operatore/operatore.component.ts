import { Component , Input, Output, EventEmitter, computed,signal} from '@angular/core';
import { user } from '../../interfaces';

@Component({
  selector: 'app-operatore',
  templateUrl: './operatore.component.html',
  styleUrl: './operatore.component.css'
})


export class OperatoreComponent {
  /* riceve da MainComponent l'oggetto, che descrive lo chef */
  @Input() operatore ?: any;
  /* Spara a MainComponent un boolean che permette di aprire il form*/
  @Output() select = new EventEmitter<user>();

/* Spara il dato 'chef' al genitore ricevuto da MainComponent */
  sparadati(){
    console.log(this.operatore!.nome)
    this.select.emit(this.operatore);
  }
}
