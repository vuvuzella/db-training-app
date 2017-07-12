import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules or components imports
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    // root routing is between
    // 1. Dahsboard module for logged in users
    // 2. Website module for visitors
    // 3. generic page not found
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        // loadChildren: () => DashboardModule
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {

        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
    providers: []
})

export class AppRoutingModule {}
