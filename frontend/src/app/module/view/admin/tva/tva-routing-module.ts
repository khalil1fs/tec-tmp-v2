import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { TvaAddComponent } from './tva-add/tva-add.component';
import { TvaEditComponent } from './tva-edit/tva-edit.component';
import { TvaListComponent } from './tva-list/tva-list.component';
import { TvaViewComponent } from './tva-view/tva-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: TvaListComponent,
  },
  {
    path: 'add',
    component: TvaAddComponent,
  },
  {
    path: 'edit',
    component: TvaEditComponent,
  },
  {
    path: 'view',
    component: TvaViewComponent,
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
export class TvaRoutingModule {}