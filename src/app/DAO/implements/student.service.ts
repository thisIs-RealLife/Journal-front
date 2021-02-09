import {Injectable} from '@angular/core';
import {StudentDao} from '../interface/studentDao';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../Model/Student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements StudentDao {

  public url = 'http://localhost:8080/student';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url + '/all');
  }

  add(student: Student): Observable<string> {
    return this.httpClient.post(this.url + '/add', student, {responseType: 'text'});
  }

  delete(student: Student): Observable<string> {
    return this.httpClient.delete(this.url + '/' + student.id + '/delete', {responseType: 'text'});
  }

  update(student: Student): Observable<string> {
   return this.httpClient.put(this.url + '/' + student.id + '/update', student, {responseType: 'text'});
  }

  subscribeOnEvents(onmessage: (s) => void, onerror: (error) => void): void {
    const source = new EventSource(this.url + '/subscribe');
    source.addEventListener('message', onmessage);
    source.addEventListener('error', onerror);
  }
}
