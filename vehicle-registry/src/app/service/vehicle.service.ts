import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError} from 'rxjs'
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiUrl = 'https://localhost:44327/Car';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getVehicles(): Observable<any>{
    return this.httpClient
    .get('https://localhost:44327/Car')
    .pipe(
      map(res =>res),
      catchError(error=>throwError(error)));
    
  }

  public getVehiclesById(id: number): Observable<any>{
    return this.httpClient
    .get(`https://localhost:44327/Car/${id}`)
    .pipe(
      map(res =>res),
      catchError(error=>throwError(error)));
    
  }

  /**
   * name
   */
  public saveVehicle(vehicle: Vehicle) {

    return this.httpClient
    .post('https://localhost:44327/Car', vehicle)
    .pipe(
      map(res =>res),
      catchError(error=>throwError(error)));

    
  }

}
