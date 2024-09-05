import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { KakaoCallback } from "./callback/kakao.callback.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'kakao',
        children: [
            {
                path: 'callback',
                component: KakaoCallback
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}