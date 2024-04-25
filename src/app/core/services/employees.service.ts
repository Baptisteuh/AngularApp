import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('http://localhost:3000/employees');
    }

    getEmployeeById(idEmployee: number): Observable<Employee> {
        const employee = this.http.get<Employee>(`http://localhost:3000/employees/${idEmployee}`);
        if (!employee) {
            throw new Error('Employee not found !');
        } else {
            return employee;
        }
    }

    addEmployee(formValue: { firstName: string, lastName: string, mail?: string, pwd: string }): Observable<Employee> {
        if (!!this.getAllEmployees()) {
            return this.getAllEmployees().pipe(
                map(() => ({
                    id: 0,
                    ...formValue
                })),
                switchMap(newEmployee => this.http.post<Employee>(
                    `http://localhost:3000/employees`,
                    newEmployee)
                )
            )
        } else {
            return this.getAllEmployees().pipe(
                map(employees => [...employees].sort((a, b) => a.id - b.id)),
                map(sortedEmployees => sortedEmployees[sortedEmployees.length - 1]),
                map(previousEmployee => ({
                    id: previousEmployee.id + 1,
                    ...formValue
                })),
                switchMap(newEmployee => this.http.post<Employee>(
                    `http://localhost:3000/employees`,
                    newEmployee)
                )
            )
        }
    }

    deleteEmployee(idEmployee: number): void {
        this.http.delete<Employee>(`http://localhost:3000/employees/${idEmployee}`).subscribe();
    }
}
