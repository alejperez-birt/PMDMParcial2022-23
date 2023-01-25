import { Producto } from './../interfaces/mis-interfaces';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GestionListaService {

  // Array con los productos almacenados
  private listaProductos: Producto[] = [
    // {
    //   "id": 3,
    //   "titulo": 	"Mens Cotton Jacket",
    //   "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //   "valoracion": 4.7
    // },
    // {
    //   "id": 7,
    //   "titulo": 	"White Gold Plated Princess",
    //   "foto": 	"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    //   "valoracion": 3
    // }
  ];

  constructor(private alerta: AlertController) {
    
  }

  // Método para añadir un producto al array
  // Si el producto ya existe, avisa de ello. En caso contrario lo añade
  public addProducto(producto: Producto) {
    let nuevoProducto = this.copiarProducto(producto);

    if (!this.buscarIdProducto(nuevoProducto.id)) {
      this.listaProductos.push(nuevoProducto);
    } else {
      this.mostrarAlerta();
    }
    console.log(this.listaProductos);
  }

  async mostrarAlerta() {
    const alert = await this.alerta.create({
      header: 'ATENCIÓN',
      message: 'Este producto ya está en la lista',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Método que copia un objeto
  private copiarProducto(producto: Producto): Producto {
    let productoString: string = JSON.stringify(producto);
    let nuevoProducto: Producto = JSON.parse(productoString);
    return nuevoProducto;
  }

  // Método que busca un producto en el array
  private buscarIdProducto(id: number) {
    const encontrado = this.listaProductos.find(elemento => elemento.id == id);
    console.log(encontrado);
    if (encontrado) {
      return true;
    }
    return false;
  }

  // Método que dvuelve el array de productos
  public getLista(): Producto[] {
    return this.listaProductos;
  }
}
