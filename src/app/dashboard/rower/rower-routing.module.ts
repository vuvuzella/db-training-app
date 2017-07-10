import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowerComponent } from './rower.component';
import { RowerListComponent } from './rower-list/rower-list.component';

const routes: Routes = [
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
            }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class RowerRoutingModule {}
