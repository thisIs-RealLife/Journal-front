import {Subject} from './Subject';

export class Student {
  id: number;
  name: string;
  surname: string;
  age: number;
  password: string;
  subjects?: Subject[];


  constructor(id: number, name: string, surname: string, age: number, password: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.password = password;
  }
}
