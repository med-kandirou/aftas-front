import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';
import {  FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(form:FormGroup) :Observable<String>{
    return this.http.post<String>(API_BASE_URL+`/auth/login`,form,{ headers: { Accept: 'application/json' } });
  }

  register(form:FormGroup): Observable<String> {
    return this.http.post<String>(API_BASE_URL+`/auth/register`, form,{ headers: { Accept: 'application/json' } });
  }


}
