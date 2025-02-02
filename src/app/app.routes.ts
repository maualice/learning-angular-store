import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component'
import { NotFoundComponent } from '@info/pages/not-found/not-found.component'

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
