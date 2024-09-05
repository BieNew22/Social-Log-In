import { Routes } from '@angular/router';
import { AuthGuard } from './auth/core/auth.guard';

import { SecretComponent } from './secret/secret.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        // 기본 접속시 -> home으로 리다이렉트
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AuthRoutingModule)
    },
    {
        path: 'secret',
        canActivate: [AuthGuard],
        component: SecretComponent
    },
];

// more information : https://www.angular.kr/guide/router
