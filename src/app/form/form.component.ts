import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name:string;
  prenom:string;
  age:string;
  job:string
  adresse:string;
  constructor() { }

  ngOnInit() {
    this.name="Nidhal";
    this.prenom="Jbahi";
    this.age="23";
    this.job="WebDesigner";
    this.adresse="Djerba-Midoun";
  }

}
