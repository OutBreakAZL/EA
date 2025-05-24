import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationFormComponent } from '../components/donation.component';

/**
 * @summary Page component for rendering the donation form. Route: /nonprofit/donations/new. Author: Alessandro Netto Zevallos Linares.
 */
@Component({
  selector: 'app-donation-page',
  standalone: true,
  imports: [CommonModule, DonationFormComponent],
  template: `
    <section>
      <app-donation-form></app-donation-form>
    </section>
  `
})
export class DonationPage {}
