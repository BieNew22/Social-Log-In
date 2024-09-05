import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KakaoAuthService } from "../service/kakao.auth.service";
import { environment } from "../../../environments/environment";

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

    kakaoLogin(): void {
        window.location.href = environment.getKakaoAuthCode + `?client_id=${environment.kakaoKey}&redirect_uri=${environment.kakaoRedirectUri}&response_type=code`
    }
}