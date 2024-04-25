import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  exists: boolean = false;
  error: boolean = false;

  constructor(private auth: AuthService,
    private router: Router,
    private service: EmployeesService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.service.getAllEmployees().subscribe(employees => {
      for (const emp of employees) {
        if (emp.mail == this.email && emp.pwd == this.password) {
          this.auth.login();
          this.router.navigateByUrl('');
          this.exists = true;
          this.error = false;
        }
      }
      if (!this.exists) {
        this.error = true;
      }
    });
  }

  onRegister() {
    this.router.navigateByUrl('/auth/register');
  }

}