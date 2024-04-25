import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { SingleEmployeeComponent } from './components/single-employee/single-employee.component';

const routes: Routes = [
    { path: '', component: EmployeesListComponent },
    { path: 'create', component: NewEmployeeComponent },
    { path: ':id', component: SingleEmployeeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeesRoutingModule { }