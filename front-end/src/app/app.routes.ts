import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

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
    }
];

// more information : https://www.angular.kr/guide/router
