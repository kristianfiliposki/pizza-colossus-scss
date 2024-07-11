import { Component, OnInit, inject, signal } from '@angular/core';
import { CallService } from '../call.service';


@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'pizza-colossus';
  error=this.CallService.error;
  birrerie = this.CallService.birrerie;

  constructor(private CallService: CallService) {
  }

  ngOnInit() {
    this.CallService.subscription()
}
}
