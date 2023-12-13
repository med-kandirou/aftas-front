import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fish } from '../models/fish.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http:HttpClient) { }
  getFishs(): Observable<Fish[]> {
    return this.http.get<Fish[]>(API_BASE_URL+`/api/Fish`, { headers: { Accept: 'application/json' } });
  }

}
