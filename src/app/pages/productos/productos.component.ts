import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  items:any[] = [{
    imagen: "assets/img/uso-hogar.jpg",
    titulo: "uso en el hogar",
    url:"uso-en-hogar"
  },{
    imagen:"assets/img/uso-gabinete.jpg",
    titulo:"uso en gabinete",
    url:"uso-en-gabinete"
  },{
    imagen:"assets/img/maquillaje.jpg",
    titulo:"maquillaje",
    url:"maquillaje"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
