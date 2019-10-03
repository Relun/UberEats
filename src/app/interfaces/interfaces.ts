export interface RootObject {
  city: string;
  restaurants_Item: RestaurantsItem[];
}

export interface RestaurantsItem {
  type_food: string;
  name: string;
  price: number;
  recycling: boolean;
  img: string;
}