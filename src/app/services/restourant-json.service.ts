import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantsItem } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class RestourantJsonService {
  //https://raw.githubusercontent.com/Patriciavaldebenito/UberEats/master/restaurant.json
  constructor(private http: HttpClient) { }

   getRestaurant() {

return this.http.get<RestaurantsItem>("https://raw.githubusercontent.com/Patriciavaldebenito/momentaneo-json/master/src/resttype.json");
   }
}
