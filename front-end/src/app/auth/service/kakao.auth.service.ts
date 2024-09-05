import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

declare global {
    interface Window {
        Kakao: any;
    }
}

@Injectable({
    providedIn: 'root'
})
export class KakaoAuthService {
    constructor(
        private http: HttpClient,
    ) {
        this.initKakao();
    }

    private initKakao(): void {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(environment.kakaoKey);
        }
    }

    public login(): Promise<any> {
        return new Promise((resolve, reject) => {
            window.Kakao.Auth.authorize({
                success: (authObj: any) => {
                    console.log('로그인 성공', authObj);
                    resolve(authObj);
                },
                fail: (err: any) => {
                    console.error('로그인 실패', err);
                    reject(err);
                },
                // redirectUri: environment.kakaoRedirectUri,
            });
        });
    }

    public logout(): void {
        window.Kakao.Auth.logout(() => {
            console.log('로그아웃 완료');
        });
    }
}