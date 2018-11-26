import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlSerializer } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ClientComponent } from './client.component';
import { ClientRouter } from './client.router';
import { ApiModule } from './core/api/api.module';
import { TokenInterceptor } from './core/auth/token.interceptor';
import { ErrorDialogComponent } from './core/error/error.dialog';
import { ClientErrorHandler } from './core/error/error.handler';
import { I18nComponent } from './core/i18n/i18n.component';
import { I18nInterceptor } from './core/i18n/i18n.interceptor';
import { ClientUrlSerializer } from './core/utils/serializer';
import { LayoutComponent } from './views/layout/layout.component';

const ClientProviders = [
  { provide: ErrorHandler, useClass: ClientErrorHandler },
  { provide: UrlSerializer, useClass: ClientUrlSerializer },

  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: I18nInterceptor, multi: true }
];

const ClientEntryComponents = [
  ErrorDialogComponent
];

const ClientDeclarations = [
  ClientComponent,
  I18nComponent
];

const ClientImports = [
  ClientErrorHandler.imports,
  ErrorDialogComponent.imports,
  LayoutComponent.imports
];

@NgModule({
  bootstrap: [ClientComponent],
  providers: ClientProviders,
  entryComponents: ClientEntryComponents,
  declarations: [
    ...ClientDeclarations,
    ...ClientEntryComponents
  ],
  imports: [
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientImports,
    ClientRouter,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js')
  ]
})

export class ClientModule { }
