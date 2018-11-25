import { Component, Inject } from '@angular/core';
import { MatButtonModule, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorModel } from './error.model';
import { ClientPackage } from './package';

@Component({
  template: `
    <h1 mat-dialog-title>
      <!-- <i18n i18n="@@unhandledError">unhandledError</i18n>: -->
      Unhandled Error:
      <!-- <?i18n> -->
      {{ data.error.error }}
    </h1>
    <div mat-dialog-content>
      <pre><strong>Status:</strong><br>{{ data.error.status }}</pre>
      <pre><strong>Resource:</strong><br>{{ data.error.path }}</pre>
      <pre><strong>Timestamp:</strong><br>{{ data.error.timestamp }}</pre>
      <pre><strong>Stacktrace:</strong><br>{{ data.stacktrace }}</pre>
      <pre><strong>Exception:</strong><br>{{ data.error.message }}</pre>
    </div>
    <div mat-dialog-actions>
      <a mat-button href="{{ clientPackage.bugs.url }}" target="_blank">
        <!-- <i18n i18n="@@reportIssue">reportIssue</i18n> -->
        Report Issue
        <!-- <?i18n> -->
      </a>
      <button mat-button mat-dialog-close>
        <!-- <i18n i18n="@@close">close</i18n> -->
        Close
        <!-- <?i18n> -->
      </button>
    </div>
  `,
  styles: [
    'h1 { color: red; }'
  ]
})

export class ClientErrorComponent {

  public static readonly imports = [
    MatButtonModule
  ];

  constructor(
    public clientPackage: ClientPackage,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      error: ErrorModel,
      stacktrace?: string
    }
  ) { }

}
