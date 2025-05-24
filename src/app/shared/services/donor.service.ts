import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DonorService {
  private readonly apiUrl = 'http://localhost:3000/donors';

  constructor(private http: HttpClient) {}

  existsDonor(id: number): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?id=${id}`).pipe(map(d => d.length > 0));
  }
}
