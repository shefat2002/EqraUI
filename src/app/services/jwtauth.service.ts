import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtauthService {
  constructor(private http: HttpClient) { }
  private apiUrl = `${environment.apiUrl}/auth`;
  private tokenKey: string = 'Bearer';

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }
  UserLogin(username: string, password: string): Observable<any> {
    const jsonData = {
      Username: username,
      Password: password
    };
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
  
}
