import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from 'src/app/module/view/authentication/page404/page404.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceViewComponent } from './service-view/service-view.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ServiceListComponent,
  },
  {
    path: 'add',
    component: ServiceAddComponent,
  },
  {
    path: 'edit',
    component: ServiceEditComponent,
  },
  {
    path: 'view',
    component: ServiceViewComponent,
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
export class ServiceRoutingModule {}