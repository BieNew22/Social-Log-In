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

    public login(authCode: String): void {
        //TODO : authCode를서버로 보내서 accesToken & refreshToken을 받아오기
    }

    public logout(): void {
        window.Kakao.Auth.logout(() => {
            console.log('로그아웃 완료');
        });
    }
}