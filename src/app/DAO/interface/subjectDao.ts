import {Student} from '../../Model/Student';
import {Observable} from 'rxjs';
import {Subject} from '../../Model/Subject';

export interface SubjectDao {
  add(subject: Subject, student: Student): Observable<string>;
  delete(subject: Subject, student: Student): Observable<string>;
  update(subject: Subject, student: Student): Observable<string>;
}
