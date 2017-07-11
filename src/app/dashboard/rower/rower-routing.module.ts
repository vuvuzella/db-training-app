import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowerComponent } from './rower.component';
import { RowerListComponent } from './rower-list/rower-list.component';
import { RowerAddComponent } from './rower-add/rower-add.component';
import { RowerEditComponent } from './rower-edit/rower-edit.component';

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
            },
            {
                path: 'add',
                component: RowerAddComponent,
            },
            {
                path: 'edit/:id',
                component: RowerEditComponent,
            },
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
