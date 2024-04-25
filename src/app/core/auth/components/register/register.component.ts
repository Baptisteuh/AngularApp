import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
