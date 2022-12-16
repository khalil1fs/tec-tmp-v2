import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.Technicien,
        },
        loadChildren: () =>
          import('src/app/module/view/technicien/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'tva',
        canActivate: [AuthGuard],
        data: {
          role: Role.Technicien,
        },
        loadChildren: () =>
          import('src/app/module/view/technicien/tva/tva-module').then((m) => m.TvaModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicienRoutingModule {}
