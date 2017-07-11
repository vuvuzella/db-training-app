import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RowerModule } from './rower/rower.module';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'rower',
        pathMatch: 'full'
      },
      {
        path: 'rower',
        // loadChildren: () => RowerModule
        loadChildren: 'app/dashboard/rower/rower.module#RowerModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
