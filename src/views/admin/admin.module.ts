import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRouter } from './admin.router';
import { LoginComponent } from './login.component';
import { CoreModule } from '@portal/core';
import { FlexLayoutModule } from '@angular/flex-layout';

const AdminProviders = [
];

const AdminEntryComponents = [
  LoginComponent
];

const AdminDeclarations = [
  AdminComponent,
];

const AdminImports = [
  CoreModule,
  FlexLayoutModule,
  LoginComponent.imports
];


@NgModule({
  providers: AdminProviders,
  entryComponents: AdminEntryComponents,
  declarations: [
    ...AdminDeclarations,
    ...AdminEntryComponents
  ],
  imports: [
    AdminImports,
    AdminRouter,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class AdminModule { }
