import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Yad2ApiService {
  private apiUrl = 'https://localhost:44347/api'; // replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Assets`);
  }

}
