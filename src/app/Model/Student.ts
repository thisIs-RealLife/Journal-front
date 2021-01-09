import {Subject} from './Subject';

export class Student {
  id?: number;
  name: string;
  surname: string;
  age: number;
  password: string;
  subjects?: Subject[];

  constructor(name: string, surname: string, age: number, password: string, id?: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.password = password;
  }
}
