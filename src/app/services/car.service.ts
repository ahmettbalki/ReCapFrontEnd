import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7153/api/cars/getall"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<CarResponseModel> {
    let newPath =this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colordId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbycolorid?colorId="+colordId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
