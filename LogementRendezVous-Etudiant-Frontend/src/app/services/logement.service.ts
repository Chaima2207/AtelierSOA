import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement } from '../models/Logement';

@Injectable({ providedIn: 'root' })
export class LogementService {
  private baseUrl = 'http://localhost:8081/LogementRendezVous_Etudiant_war_exploded/api/logement';

  constructor(private http: HttpClient) {}

getAll(): Observable<Logement[]> {
    return this.http.get<Logement[]>(`${this.baseUrl}/getAll`);
  }

  add(logement: Logement): Observable<string> {
    return this.http.post(`${this.baseUrl}/add`, logement, { responseType: 'text' });
  }

  delete(ref: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${ref}`);
  }

  getByDeleguation(deleguation: string): Observable<Logement[]> {
    return this.http.get<Logement[]>(`${this.baseUrl}/byDel/${deleguation}`);
  }

  getByReference(ref: number): Observable<Logement> {
    return this.http.get<Logement>(`${this.baseUrl}/byRef/${ref}`);
  }

  listByRef(ref: number): Observable<Logement[]> {
    return this.http.get<Logement[]>(`${this.baseUrl}/listByRef/${ref}`);
  }

  update(ref: number, logement: Logement): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update/${ref}`, logement);
  }
}
