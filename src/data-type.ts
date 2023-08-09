export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}
export interface product{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number,
  quantity:undefined | number,
  productId:undefined|number
}
export interface cart{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}

export interface priceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}

export interface order {
  email:string,
  address:string,
  contact:string,
  totalPrice:number,
  userId:string,
  id:number|undefined
}

// data-type.ts

export interface CardData {
  cardImage: string;
  cardAlt: string;
  figurinhaImage: string;
  figurinhaAlt: string;
  titulo: string;
  subtitulo: string;
  preco: string;
  rating: number;

}
 export interface Category {
  name: string;
  checked: boolean;
}

export interface Brands {
  name: string;
  checked: boolean;
}
export interface Product {
  cardImage: string;
  cardAlt: string;
  titulo: string;
  subtitulo: string;
  preco: number;
  rating: number;
}

export interface Features {
  name: string;
  checked: boolean;
}



