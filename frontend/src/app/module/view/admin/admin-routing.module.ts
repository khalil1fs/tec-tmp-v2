import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/guard/auth.guard';
import {Role} from 'src/app/core/models/role';


const routes: Routes = [

      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },      
{
        path: 'rendez-vous',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/rendez-vous/rendez-vous-module').then((m) => m.RendezVousModule),
      },

      
{
        path: 'service',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/service/service-module').then((m) => m.ServiceModule),
      },

      
{
        path: 'seccurcales',
        canActivate: [AuthGuard],
        data: {
          role: Role.Admin,
        },
        loadChildren: () =>
          import('src/app/module/view/admin/seccurcales/seccurcales-module').then((m) => m.SeccurcalesModule),
      },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
