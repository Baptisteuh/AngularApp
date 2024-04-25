import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees$!: Observable<Employee[]>;

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.employees$ = this.service.getAllEmployees();
  }

}
