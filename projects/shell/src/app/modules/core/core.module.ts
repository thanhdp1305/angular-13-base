import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routes';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { Api } from '../shared/networks/api';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CookieControl } from '../shared/utils/cookie-control';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminMenuComponent } from './components/sidebar/views/admin-menu/admin-menu.component';
import { GuestMainComponent } from './components/guest-main/guest-main.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    AdminMenuComponent,
    GuestMainComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(CoreRoutes)
  ],
  providers: [
    Api,
    CookieControl,
    AuthService,
    AuthGuard,
    NoAuthGuard,
    NgSelectModule,
  ],
  exports: [RouterModule]
})
export class CoreModule { }
