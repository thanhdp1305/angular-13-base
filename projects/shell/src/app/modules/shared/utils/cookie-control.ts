import { CookieService } from "ngx-cookie-service";
import jwt_decode from 'jwt-decode';
import { Token } from "../models/token";
import { CookieEnum } from "../configs/enums";
import { Injectable } from "@angular/core";
import UniversalCookie from "universal-cookie";

const cookie = new UniversalCookie();

@Injectable()
export class CookieControl {
  constructor(
    public cookieSerivce: CookieService
  ) { }

  /**
   * Save token
   * @param token 
   */
  saveToken(token: string) {
    let decode_token: Token = new Token(jwt_decode(token));
    let d = new Date(0);
    d.setUTCSeconds(decode_token.exp);

    cookie.set(CookieEnum.token, token, { path: "/" });
  }

  /**
   * get Token
   */
  get getToken() {
    return cookie.get(CookieEnum.token) || "";
  }

  /**
   * Check login
   */
  get isLoginValid() {
    if (this.getToken != '' && this.getToken != undefined && this.getToken != null) {
      return true;
    }
    return false;
  }

  /**
   * Remove All cookie
   */
  removeAll() {
    cookie.remove(CookieEnum.token, { path: "/" });
  }
}