import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-kakao-callback',
    template: '<p> in kakao login...</p>',
})
export class KakaoCallback implements OnInit {

    constructor(
        private activatedRouter: ActivatedRoute,
        private router: Router,
        // private http: HttpClient,
    ) {

    }

    ngOnInit(): void {
        this.activatedRouter.queryParams.subscribe(params => {
            const authCode = params['code'];

            if (authCode) {
                console.log('authCode:' + authCode)
            }
        })

        this.router.navigate(['/']);
    }

}