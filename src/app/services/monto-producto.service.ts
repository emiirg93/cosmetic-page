import { Injectable, Output} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MontoProductoService {
  cantidadTotal: number = 0;

  constructor() {}

  sumarProductos(monto: number) {
    this.cantidadTotal += monto;
    console.log(this.cantidadTotal);
  }
}
