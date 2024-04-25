import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Input() employee!: Employee;

  constructor(private router: Router, private service: EmployeesService) { }

  onViewEmployee(): void {
    this.router.navigateByUrl(`employees/${this.employee.id}`);
  }

  onDeleteEmployee(): void {
    this.service.deleteEmployee(this.employee.id);
    this.reloadComponent();
  }

  reloadComponent() {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => { this.router.navigate(['employees']); });
  }

}
