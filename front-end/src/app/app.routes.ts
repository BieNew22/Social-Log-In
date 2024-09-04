import { Routes } from '@angular/router';
import { AuthGuard } from './auth/core/auth.guard';

import { SecretComponent } from './secret/secret.component';

export const routes: Routes = [
    {
        // 기본 접속시 -> home으로 리다이렉트
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
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
