import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';


// API url
const STORE_BASE_URL = 'https://metaphysics-production.artsy.net/v2'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

    getAllItems():Observable<Array<Item>> {
      return this.httpClient.get<Array<Item>>(
        
        // GET CALL
        `${STORE_BASE_URL}`
      )
    }

  
}
