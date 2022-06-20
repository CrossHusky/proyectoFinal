import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  email = new FormControl("");

  cuenta: string="";
  contra1: string="";
  contra2: string="";
  /* texto: string=""; */

  texto=new FormControl("");
  
  updateEmail() {
    /* this.email.setValue("ikernaix@gmail.com");
    this._name = "Iker"; */
    
  }

  _name: string="";


  /* get name(): string {
    return this._name;
  } */

  set name(newName: string) {
    console.log(newName);
    this._name = newName;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
