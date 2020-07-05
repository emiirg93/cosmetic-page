import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactameComponent } from "./pages/contactame/contactame.component";
import { ProductosComponent } from "./pages/productos/productos.component";
import { ListadoProductosComponent } from "./pages/listado-productos/listado-productos.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contactame", component: ContactameComponent },
  { path: "productos",component: ProductosComponent},
  { path: "productos/:id",component:ListadoProductosComponent},
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
