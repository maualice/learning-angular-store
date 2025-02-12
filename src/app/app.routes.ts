import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component'
import { NotFoundComponent } from '@info/pages/not-found/not-found.component'

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: '',
            loadComponent: () => import('./domains/products/pages/list/list.component') //component: ListComponent
        },
        {
            path: 'product/:id',
            loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component') //component: ProductDetailComponent
        },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
