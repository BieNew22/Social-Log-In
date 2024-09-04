import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KakaoAuthService } from "../service/kakao.auth.service";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private kakaoAuth: KakaoAuthService,
    ) {}

    ngOnInit(): void {
        
    }

    navigateToSecret(): void {
        this.router.navigate(['/secret']);
    }

    kakaoLogin(): void {
        this.kakaoAuth.login()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}