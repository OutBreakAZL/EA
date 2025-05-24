import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donation } from '../models/donation.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DonationService {
  private readonly apiUrl = 'http://localhost:3000/donations';

  constructor(private http: HttpClient) {}

  registerDonation(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(this.apiUrl, donation);
  }
}
