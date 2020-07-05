import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactameComponent } from './pages/contactame/contactame.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { MontoProductoService } from './services/monto-producto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactameComponent,
    ProductosComponent,
    ListadoProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [MontoProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
