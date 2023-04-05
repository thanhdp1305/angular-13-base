import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CookieControl } from '../../../shared/utils/cookie-control';
import { isSignedIn } from '../../../shared/configs/auth';
import { Urls } from '../../../shared/configs/urls';
import jwt_decode from 'jwt-decode';
import { Token } from '../../../shared/models/token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input('toggleSideBar') toggleSideBar = true;
  @Input('logoHeader') logoHeader = false;

  constructor(
    public translate: TranslateService,
    private cookie: CookieControl,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.translate.currentLang);
  }

  ngAfterViewInit(): void {
    // this.darkModeSwitch();
  }

  get isLogined(): boolean {
    const token = this.cookie.getToken;
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  signOut() {
    this.cookie.removeAll();
    this.router.navigate([Urls.signIn]);
  }

  userInfo(){
    //
  }

  darkModeSwitch() {
    var toggleSwitch: any = document.querySelector('.theme-switch input[type="checkbox"]');
    var currentTheme: any = localStorage.getItem('theme');
    var mainHeader: any = document.querySelector('.main-header');
    var mainSidebar: any = document.querySelector('.main-sidebar');

    if (currentTheme) {
      if (currentTheme === 'dark') {
        if (!document.body.classList.contains('dark-mode')) {
          document.body.classList.add("dark-mode");
        }
        if (mainHeader!.classList.contains('navbar-light')) {
          mainHeader!.classList.add('navbar-dark');
          mainHeader!.classList.remove('navbar-light');
        }
        if (mainSidebar!.classList.contains('navbar-light')) {
          mainSidebar!.classList.add('navbar-dark');
          mainSidebar!.classList.remove('navbar-light');
        }
        toggleSwitch!.checked = true;
      }
    }

    function switchTheme(e: any) {
      if (e.target.checked) {
        if (!document.body.classList.contains('dark-mode')) {
          document.body.classList.add("dark-mode");
        }
        if (mainHeader!.classList.contains('navbar-light')) {
          mainHeader!.classList.add('navbar-dark');
          mainHeader!.classList.remove('navbar-light');
        }
        if (mainSidebar!.classList.contains('navbar-light')) {
          mainSidebar!.classList.add('navbar-dark');
          mainSidebar!.classList.remove('navbar-light');
        }
        localStorage.setItem('theme', 'dark');
      } else {
        if (document.body.classList.contains('dark-mode')) {
          document.body.classList.remove("dark-mode");
        }
        if (mainHeader!.classList.contains('navbar-dark')) {
          mainHeader!.classList.add('navbar-light');
          mainHeader!.classList.remove('navbar-dark');
        }
        if (mainSidebar!.classList.contains('navbar-dark')) {
          mainSidebar!.classList.add('navbar-light');
          mainSidebar!.classList.remove('navbar-dark');
        }
        localStorage.setItem('theme', 'light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  }

  get username(): string {
    const token: string = this.cookie.getToken;
    const decode_token: Token = new Token(jwt_decode(token));

    return decode_token.user_name || "";
  }
}
