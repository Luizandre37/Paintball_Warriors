import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { cart,product,order,CardData } from 'src/data-type';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  cartData = new EventEmitter<product[] | []>();
  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProducts(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  getTopProducts(): Observable<CardData[]> {

    return of([
      {
        cardImage:  'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 1',
        figurinhaImage: 'path/to/image1_figurinha.jpg',
        figurinhaAlt: 'Image 1 Figurinha',
        titulo: 'Arcade',
        subtitulo: '156 gramas',
        preco: '$99.99',
        rating: 4
      },
      {
        cardImage: 'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      },
      {
        cardImage: 'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      },
      {
        cardImage:'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3 
      },
      {
        cardImage: 'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      },
      {
        cardImage:  'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      },
      {
        cardImage:  'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      },
      {
        cardImage:  'assets/img/paintballGrupo1.png',
        cardAlt: 'Image 2',
        figurinhaImage: 'path/to/image2_figurinha.jpg',
        figurinhaAlt: 'Image 2 Figurinha',
        titulo: 'Esporte',
        subtitulo: '120 gramas',
        preco: '$49.99',
        rating: 3
      }


    ]);
  }


  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8');
  }

  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }

  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: product[] = JSON.parse(cartData);
      items = items.filter((item: product) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }
  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId);
  }
  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  orderNow(data: order) {
    return this.http.post('http://localhost:3000/orders', data);
  }
  orderList() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<order[]>('http://localhost:3000/orders?userId=' + userData.id);
  }

  deleteCartItems(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId).subscribe((result) => {
      this.cartData.emit([]);
    })
  }

  cancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/orders/'+orderId)

  }

}
