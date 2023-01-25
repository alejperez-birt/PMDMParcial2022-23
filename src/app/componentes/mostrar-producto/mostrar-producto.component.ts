import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss'],
})
export class MostrarProductoComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() foto: string = "";
  @Input() valoracion: number;
  
  constructor() { }

  ngOnInit() {}

}
