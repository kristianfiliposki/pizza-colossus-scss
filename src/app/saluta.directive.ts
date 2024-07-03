import { Directive } from '@angular/core';

@Directive({
  selector: '[saluta]',
})

export class SalutaDirective {

  constructor() {
    console.log("ti saluto!")
  }

  confirmPage(){
    const wantsToLeave = window.confirm("do you want to leave me?");
  };

  ngOnDestroy() {
    this.confirmPage();
  }

}

