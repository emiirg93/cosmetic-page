import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accion(){
    console.log('pase por arriba')
  }

}
