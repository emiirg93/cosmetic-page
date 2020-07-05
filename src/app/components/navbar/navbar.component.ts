import { Component, OnInit, HostListener } from "@angular/core";
import { MontoProductoService } from 'src/app/services/monto-producto.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  
  carrito:number;
  menuOpen: boolean = false;
  menuShop: boolean = false;

  constructor(private montoService:MontoProductoService) {
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.carrito = this.montoService.cantidadTotal
    //   console.log('sada')
    // },1500)
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
      this.menuOpen=false;
  }
}


