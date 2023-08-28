import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  model = new Employee(
    'John',
    'Doe',
    true,
    'W2'
    );

    @ViewChild('empForm') empForm: NgForm | any

    ngOnInit(): void {
      console.log(`Employee's first name is ${this.model.firstName}`)
      console.log(`Employee's last name is ${this.model.lastName}`)
    }

    submitForm() {
      console.log('form submitted');
      console.log(JSON.stringify(this.model))
      console.log(this.empForm.valid);
    }
}
