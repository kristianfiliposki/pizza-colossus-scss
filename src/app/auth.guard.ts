import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { MakepizzaService } from './makepizza.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service=inject(MakepizzaService)
  let isLogged:boolean=service.isLogged();
  if (isLogged) {
    return true;
  }
  else{

    return false;
  }
};
