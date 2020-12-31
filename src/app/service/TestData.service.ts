import { Injectable } from '@angular/core';
import {Student} from '../Model/Student';
import {TestData} from '../Data/TestData';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor() { }

  getStudent(): Student[]{
    return TestData.students;
  }
}
