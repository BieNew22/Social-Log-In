import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { KakaoAuthService } from "../service/kakao.auth.service";

@Component({
    selector: 'app-kakao-callback',
    template: '<p> in kakao login...</p>',
})
export class KakaoCallback implements OnInit {

    constructor(
        private activatedRouter: ActivatedRoute,
        private router: Router,
        private kakaoAuthService: KakaoAuthService
        // private http: HttpClient,
    ) {

    }

    ngOnInit(): void {
        this.activatedRouter.queryParams.subscribe(params => {
            const authCode = params['code'];

            if (authCode) {
                this.kakaoAuthService.login(authCode);
            }
        })

        this.router.navigate(['/']);
    }

}