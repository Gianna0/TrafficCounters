import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Speedometer } from '../models/Speedometer';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedometerService {
  private apiUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getAllSpeedometers(): Observable<Speedometer[]> {
    return this.http.get<Speedometer[]>(`${this.apiUrl}/api/speedometers`);
  }

  getSpeedometerById(id: number): Observable<Speedometer> {
    return this.http.get<Speedometer>(`${this.apiUrl}/api/speedometers/${id}`);
  }

  createSpeedometer(product: Speedometer): Observable<Speedometer> {
    return this.http.post<Speedometer>(`${this.apiUrl}/api/speedometers`, product);
  }

  updateSpeedometer(product: Speedometer): Observable<Speedometer> {
    return this.http.put<Speedometer>(`${this.apiUrl}/api/speedometers/${product.id}`, product);
  }

  deleteSpeedomter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/speedometers/${id}`);
  }
}
