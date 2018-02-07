import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  user:{id: number, job:string, name:string, lastname:string, pic:string, age:number}[];
  @Output() valueclick=new EventEmitter();
  constructor() { }

  ngOnInit() {

    this.user= [
      {"id":0,"job":"Mobile Developer","name":"Wajdi","lastname":"Toumi","pic":"assets/images/p1.jpg","age":23}


    ]
      }
      bindinfo(id){
    this.valueclick.emit({value:this.user[id]});
      }

}
