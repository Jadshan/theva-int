import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private apiUrl = 'https://localhost:7049/api/name'; // Ensure the URL is correct

  constructor(private http: HttpClient) {}

  getNameResponse(name: string): Observable<string> {
    return this.http.get(`${this.apiUrl}/${name}`, { responseType: 'text' });
  }
}
