import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConsoleRoutes } from './console.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../shared/networks/api';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './components/example/example.component';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    DashboardComponent,
    ExampleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    TranslateModule,
    SharedModule,
    NgbPaginationModule,
    RouterModule.forChild(ConsoleRoutes),
    NgSelectModule
  ],
  providers: [
    AuthGuard,
    AuthService 
  ],
  exports: [RouterModule]
})
export class ConsoleModule { }
