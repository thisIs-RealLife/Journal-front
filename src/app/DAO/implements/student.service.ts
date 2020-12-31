import { Injectable } from '@angular/core';
import {StudentDao} from '../interface/studentDao';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../Model/Student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements StudentDao{

  private url = 'http://localhost:8080/student';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url + '/all');
  }
}
