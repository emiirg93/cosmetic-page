import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {

  @Input()title :boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }
}
