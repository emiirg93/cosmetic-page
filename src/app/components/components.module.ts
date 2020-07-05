import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, FormularioComponent, ProductoComponent],
  exports: [NavbarComponent,FooterComponent,FormularioComponent,ProductoComponent],
  imports: [CommonModule,RouterModule,BrowserModule]
})
export class ComponentsModule {}
