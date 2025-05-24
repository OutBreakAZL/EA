import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomePage } from './public/home/pages/home.page';
import { DonationPage } from './nonprofit/donations/pages/donation.page';
import { PageNotFoundComponent} from './shared/components/pageNotFound';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'nonprofit/donations/new', component: DonationPage },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouter = provideRouter(routes);

