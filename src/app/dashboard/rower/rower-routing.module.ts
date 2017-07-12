import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RowerDetailsResolver } from './services/rower-details.resolver';

import { RowerComponent } from './rower.component';
import { RowerListComponent } from './rower-list/rower-list.component';
import { RowerAddComponent } from './rower-add/rower-add.component';
import { RowerEditComponent } from './rower-edit/rower-edit.component';

const rowerRoutes: Routes = [
    {
        path: '',
        component: RowerComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: RowerListComponent,
            },
            {
                path: 'add',
                component: RowerAddComponent,
            },
            {
                path: 'edit/:id',
                component: RowerEditComponent,
                resolve: {
                    rower: RowerDetailsResolver
                }
            },
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(rowerRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [RowerDetailsResolver]
})

export class RowerRoutingModule {}
