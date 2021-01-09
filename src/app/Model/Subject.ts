import {Student} from './Student';
import {Mark} from './Mark';

export class Subject {
  id: number;
  nameSubject: string;
  professor?: string;
  student?: Student;
  mark?: Mark;


  constructor(nameSubject: string, professor: string, mark: Mark) {
    this.nameSubject = nameSubject;
    this.professor = professor;
    this.mark = mark;
  }
}
