import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-listado-productos",
  templateUrl: "./listado-productos.component.html",
  styleUrls: ["./listado-productos.component.css"],
})
export class ListadoProductosComponent implements OnInit {

  tituloPagina:string;
  
  productos: producto[] = [
    {
      titulo: "Emulsión protectora con color FPS 60",
      imgUrl: "http://www.laboratoriolaca.com/content/fps-60-1.jpg",
      descripcion:"Emulsión solar para protección extrema de textura liviana y gran adaptabilidad a todo tipo de piel.",
      precio: 420
    },
    {
      titulo: "Filtro solar invisible FPS 50",
      imgUrl: "http://www.laboratoriolaca.com/content/fps-50-1.jpg",
      descripcion:"Protección UVA/UVB muy alta de amplio epectro y fotoestable. Textura invisible, fluida, oil free y de rápida absorción. Resistente al agua. Con vitamina E, protege las membranas celulares.",
      precio: 400
    },
    {
      titulo: "Filtro solar invisible FPS 30",
      imgUrl: "http://www.laboratoriolaca.com/content/fps-30-1.jpg",
      descripcion:"Protección UVA/UVB muy alta de amplio epectro y fotoestable. Textura invisible, fluida, oil free y de rápida absorción. Resistente al agua. Con vitamina E, protege las membranas celulares.",
      precio: 350
    }
  ];

  producto:productoEmitido;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((url) => {
      this.tituloPagina = url.id;
    });
  }

  ngOnInit(): void {
    this.tituloPagina = this.tituloPagina.replace(/-/g,' ');
  }

  eventoModal(producto:productoEmitido){
    this.producto = producto;
    console.log(this.producto)
  }
}

export interface producto {
  titulo:string,
  imgUrl:string,
  descripcion:string,
  precio:number 
}

export interface productoEmitido {
  producto:producto,
  detalles:boolean
}