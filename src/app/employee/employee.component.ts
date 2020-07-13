import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee;
employees:Employee[];

  constructor() {
    this.employees=[

      {eid:'1',ename:'Shreenidhi M R',desig:'CEO',joiningDate:'31/08/2020',salary:'35000'}
    ]
    
    this.employee={eid:'',ename:'',desig:'',joiningDate:null,salary:''}
  }
  
   
  AddEmployee()
  {
    this.employees.push(this.employee);
    this.employee={eid:'',ename:'',desig:'',joiningDate:null,salary:''}
  }
  ngOnInit():void {}


}















