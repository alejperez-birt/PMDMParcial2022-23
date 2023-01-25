import { GestionListaService } from './../servicios/gestion-lista.service';
import { Producto, Datos } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosProducto: Producto = {
    "id": 3,
    "titulo": 	"Mens Cotton Jacket",
    "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "valoracion": 4.7
  };

 constructor(private servidorRest: HttpClient, private gestionLista: GestionListaService) {
  this.consultaRest();
 }

 // Método que realiza una consulta REST a fakestoreapi.com
 private consultaRest(): void {
  let datosServidor: Observable<Datos>;
  datosServidor = this.servidorRest.get<Datos>("https://fakestoreapi.com/products/" + this.generaIndice());

  datosServidor.subscribe(datos => {
    this.datosProducto.id = datos.id;
    this.datosProducto.titulo = datos.title;
    this.datosProducto.foto = datos.image;
    this.datosProducto.valoracion = datos.rating.rate;
  });
   
 }

 // Método que genera un número aleatorio entre 1 y 20
 private generaIndice(): number {
   return Math.floor(Math.random() * 19) + 1;
 }

 private anadirProducto() {
  this.gestionLista.addProducto(this.datosProducto);
 }
}
