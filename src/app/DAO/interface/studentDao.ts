import {Observable} from 'rxjs';
import {Student} from '../../Model/Student';

export interface StudentDao {
  getAll(): Observable<Student[]>;
}
