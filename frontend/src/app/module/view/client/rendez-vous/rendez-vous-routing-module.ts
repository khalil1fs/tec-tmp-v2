import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { RendezVousAddComponent } from './rendez-vous-add/rendez-vous-add.component';
import { RendezVousEditComponent } from './rendez-vous-edit/rendez-vous-edit.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { RendezVousViewComponent } from './rendez-vous-view/rendez-vous-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: RendezVousListComponent,
  },
  {
    path: 'add',
    component: RendezVousAddComponent,
  },
  {
    path: 'edit',
    component: RendezVousEditComponent,
  },
  {
    path: 'view',
    component: RendezVousViewComponent,
  },
  { 
    path: '**', 
    component: Page404Component,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezVousRoutingModule {}