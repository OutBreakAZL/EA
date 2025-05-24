import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Page not found</h2>
    <p>The route you tried to access does not exist.</p>
    <a routerLink="/home">← Go to Home</a>
  `
})
export class PageNotFoundComponent {}
