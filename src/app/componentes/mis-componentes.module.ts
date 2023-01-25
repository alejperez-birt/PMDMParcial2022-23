import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './explore-container/explore-container.component';



@NgModule({
  declarations: [ExploreContainerComponent, MostrarProductoComponent],
  imports: [CommonModule, IonicModule],
  exports: [ExploreContainerComponent, MostrarProductoComponent]
})
export class MisComponentesModule { }
