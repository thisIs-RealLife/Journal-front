import {Subject} from './Subject';

export class Student {
  id: number;
  name: string;
  surName: string;
  age: number;
  password: string;
  subjects?: Subject[];


  constructor(id: number, name: string, surName: string, age: number, password: string) {
    this.id = id;
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.password = password;
  }
}
