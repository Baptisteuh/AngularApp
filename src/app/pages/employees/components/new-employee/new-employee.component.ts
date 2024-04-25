import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private router: Router, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mail: [null],
      pwd: [null, [Validators.required]]
    });
  }

  onSubmitForm() {
    this.employeesService.addEmployee(this.employeeForm.value).pipe(
      tap(() => this.router.navigateByUrl('/employees'))
    ).subscribe();
  }

}
