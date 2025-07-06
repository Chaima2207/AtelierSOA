import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/RendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private baseUrl = 'http://localhost:8081/LogementRendezVous_Etudiant_war_exploded/api/rendezVous';

  constructor(private http: HttpClient) {}
  add(rendezVous: RendezVous): Observable<string> {
    return this.http.post(`${this.baseUrl}/add`, rendezVous, { responseType: 'text' });
  }

  getAll(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.baseUrl}/getAll`);
  }

  getByLogementReference(ref: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.baseUrl}/byLogRef/${ref}`);
  }

  getById(id: number): Observable<RendezVous> {
    return this.http.get<RendezVous>(`${this.baseUrl}/byId/${id}`);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${id}`);
  }

  update(id: number, rendezVous: RendezVous): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update/${id}`, rendezVous);
  }
}
