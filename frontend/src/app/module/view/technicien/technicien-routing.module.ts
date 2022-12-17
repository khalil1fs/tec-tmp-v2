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
        path: 'rendez-vous',
        canActivate: [AuthGuard],
        data: {
          role: Role.Technicien,
        },
        loadChildren: () =>
          import('src/app/module/view/technicien/rendez-vous/rendez-vous-module').then((m) => m.RendezVousModule),
      },

      
{
        path: 'service',
        canActivate: [AuthGuard],
        data: {
          role: Role.Technicien,
        },
        loadChildren: () =>
          import('src/app/module/view/technicien/service/service-module').then((m) => m.ServiceModule),
      },

      
{
        path: 'seccurcales',
        canActivate: [AuthGuard],
        data: {
          role: Role.Technicien,
        },
        loadChildren: () =>
          import('src/app/module/view/technicien/seccurcales/seccurcales-module').then((m) => m.SeccurcalesModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicienRoutingModule {}
