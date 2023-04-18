import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Api } from "../../shared/networks/api";
import { ServicePathEnums } from "../../shared/enums/service-path";

const LOGIN_OAUTH = ServicePathEnums.AUTH + "/oauth/token";

@Injectable()
export class AuthService {
  public static instance: AuthService;

  constructor(private router: Router, private api: Api) {
    if (!AuthService.instance) {
      AuthService.instance = this;
    }
    return AuthService.instance;
  }

  /**
   * API Login
   * @param data
   */
  login(data: string) {
    return this.api.post(LOGIN_OAUTH, data);
  }
}
