import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects 
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Miguel","Maroun","mmaroun@gmail.com",50000),
    new SalesPerson("John","doe","jdoe@gmail.com",67000),
    new SalesPerson("Ali","saghir","asaghir@gmail.com",102000),
    new SalesPerson("Rajesh","Molugu","Rmolugu@gmail.com",33000)
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
