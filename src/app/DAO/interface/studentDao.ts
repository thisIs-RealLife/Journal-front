import {Observable} from 'rxjs';
import {Student} from '../../Model/Student';

export interface StudentDao {
  getAll(): Observable<Student[]>;
  add(student: Student): Observable<string>;
  delete(student: Student): Observable<string>;
  update(student: Student): Observable<string>;
}
