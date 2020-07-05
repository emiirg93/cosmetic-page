import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { MontoProductoService } from 'src/app/services/monto-producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  detalles:boolean;
  @Input() producto:any={};
  @Output() productoEmitido:EventEmitter<Object>;

  constructor(private montoService:MontoProductoService) { 
    this.productoEmitido = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregarCarrito(monto:number){
    this.montoService.sumarProductos(monto);
  }

  enviarObjeto(){
    let objeto = {
      producto: this.producto,
      detalles: this.detalles
    }

    this.productoEmitido.emit(objeto);
  }
}
