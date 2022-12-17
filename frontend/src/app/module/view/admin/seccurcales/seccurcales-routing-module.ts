import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { SeccurcalesAddComponent } from './seccurcales-add/seccurcales-add.component';
import { SeccurcalesEditComponent } from './seccurcales-edit/seccurcales-edit.component';
import { SeccurcalesListComponent } from './seccurcales-list/seccurcales-list.component';
import { SeccurcalesViewComponent } from './seccurcales-view/seccurcales-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: SeccurcalesListComponent,
  },
  {
    path: 'add',
    component: SeccurcalesAddComponent,
  },
  {
    path: 'edit',
    component: SeccurcalesEditComponent,
  },
  {
    path: 'view',
    component: SeccurcalesViewComponent,
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
export class SeccurcalesRoutingModule {}