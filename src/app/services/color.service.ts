import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:7153/api/cars/getall"

  constructor(private httpClient: HttpClient) { }

  getColors() : Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
    }
}
