import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit {

  employee!: Employee;
  hasClicked!: boolean;
  buttonText!: string;
  employee$!: Observable<Employee>;

  constructor(private employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idPhoto = +this.route.snapshot.params['id'];
    this.employee$ = this.employeesService.getEmployeeById(idPhoto);
  }

  onBack(): void {
    this.router.navigateByUrl('employees');
  }

}
