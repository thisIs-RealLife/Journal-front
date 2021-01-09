import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../Model/Student';
import {SubjectDao} from '../interface/subjectDao';
import {Subject} from '../../Model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements SubjectDao{
  private url = 'http://localhost:8080/student';

  constructor(private httpClient: HttpClient) {
  }
  add(subject: Subject, student: Student): Observable<string> {
    return this.httpClient.post(this.url + student.id + '/addSubject', subject, {responseType: 'text'});
  }

  delete(subject: Subject, student: Student): Observable<string> {
    return this.httpClient.delete(this.url + student.id + '/' + subject.id + '/deleteSubject' + subject.id, {responseType: 'text'});
  }

  update(subject: Subject, student: Student): Observable<string> {
    return this.httpClient.put(this.url + student.id + '/' + subject.id + '/update/subject/' + subject.id, subject, {responseType: 'text'});
  }
}
