import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LangChangeEvent, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from './modules/shared/networks/api';
import { ModalTemplateComponent } from './modules/shared/components/modal-template/modal-template.component';
import { FormErrorComponent } from './modules/shared/components/form-error/form-error.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthGuard } from './modules/core/guards/auth.guard';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    TranslateModule.forRoot({
      defaultLanguage: 'vi',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }), // unchanged
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'LocalStorage'
    }),

    SharedModule,
    NgSelectModule
  ],
  providers: [
    Api,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private config: NgSelectConfig
  ) {
    // Config Ngx-Translate
    translateCacheService.init();
    translate.addLangs(['en', 'vi']);
    const browserLang = translateCacheService.getCachedLanguage() || "vi"; //translate.getBrowserLang() as string;
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi');

    //Ng-select config
    this.config.notFoundText = 'Không tìm thấy kết quả';
    this.config.loadingText = 'Đang tìm...';
    this.config.typeToSearchText = 'Gõ từ khóa để tìm kiếm';
    this.config.bindValue = 'value';
  }
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}