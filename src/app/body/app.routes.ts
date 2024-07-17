import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ListPizzeComponent } from '../list-pizze/list-pizze.component';
import { RFormComponent } from '../r-form/r-form.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
  {
    path:'menu/:pizzaId',
    component:ListPizzeComponent,
  },
  {
    path:'menu',
    component:ListPizzeComponent,
    data:{
      rdato:"ciao",
    },

  },
  {
    path:'',
    component:MainComponent,
  },
  {
    path:'form',
    component:RFormComponent,
  },

  {
    path:'reactive',
    component:ReactiveFormComponent,
  },
  {
    path:"**",
    component:NotFoundComponent,
  }

];
