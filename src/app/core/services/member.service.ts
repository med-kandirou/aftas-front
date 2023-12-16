import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  save(form:FormGroup): Observable<Member> {
    return this.http.post<Member>(API_BASE_URL+`/api/Member`,form ,{ headers: { Accept: 'application/json' } });
  }

  getMemberNotExistInComp(code: string): Observable<Member[]> {
    return this.http.get<Member[]>(API_BASE_URL+`/api/Member/MemberNotExistInComp/${code}`, { headers: { Accept: 'application/json' } });
  }

  search(index:string,code:string): Observable<Member[]> {
    return this.http.get<Member[]>(API_BASE_URL+`/api/Member/find/${code}/${index}` ,{ headers: { Accept: 'application/json' } });
  }
}
