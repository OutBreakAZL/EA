import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * @summary Shared header with GreenDrop logo, title, language toggle and navigation buttons. Author: Alessandro Netto Zevallos Linares.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    TranslateModule
  ],
  template: `
    <mat-toolbar color="primary">
      <img
        src="https://logo.clearbit.com/gogreendrop.com"
        alt="GreenDrop Logo"
        style="height: 40px; margin-right: 12px;"
        aria-label="GreenDrop logo"
      />
      <span style="flex: 1;">Charitable Donations</span>

      <a mat-button routerLink="/home">Home</a>
      <a mat-button routerLink="/nonprofit/donations/new">Donate</a>

      <div style="margin-left: auto;">
        <button mat-button (click)="switchLang('en')">EN</button>
        <button mat-button (click)="switchLang('es')">ES</button>
      </div>
    </mat-toolbar>
  `
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
