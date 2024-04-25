import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SingleEmployeeComponent } from './components/single-employee/single-employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeComponent,
    SingleEmployeeComponent,
    NewEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    EmployeesListComponent,
    EmployeeComponent,
    SingleEmployeeComponent,
    NewEmployeeComponent
  ]
})
export class EmployeesModule { }
