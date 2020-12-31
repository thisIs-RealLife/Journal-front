
import {Student} from '../Model/Student';
import {Mark} from '../Model/Mark';
import {Subject} from '../Model/Subject';

export class TestData {


  static subject: Subject[] = [
    {id: 1, nameSubject: 'Math'},
    {id: 2, nameSubject: 'Rus'},
    {id: 3, nameSubject: 'Engl', },
    {id: 4, nameSubject: 'History' },
    {id: 5, nameSubject: 'Geografi' },
    {id: 6, nameSubject: 'Culture' }
  ];

  static mark: Mark[] = [
    {id: 1, mark: 5, subject: TestData.subject[0]},
    {id: 2, mark: 5, subject: TestData.subject[0]},
    {id: 3, mark: 5, subject: TestData.subject[0]},
    {id: 4, mark: 5, subject: TestData.subject[0]},
    {id: 5, mark: 5, subject: TestData.subject[0]},
    {id: 6, mark: 5, subject: TestData.subject[0]},
  ];
  static students: Student[] = [
    {id: 1, name: 'Alex', surName: 'Bezdarev', age: 18, password: 'dfs', subjects: [TestData.subject[0]]},
    {id: 2, name: 'Sergej', surName: 'Bordev', age: 14, password: 'fkjhj', subjects: [TestData.subject[1]]},
    {id: 3, name: 'Sasha', surName: 'Smirnov', age: 17, password: 'fsd', subjects: [TestData.subject[2]]},
    {id: 4, name: 'Evgen', surName: 'Vasytkin', age: 14, password: 'bxvcb', subjects: [TestData.subject[3]]},
    {id: 5, name: 'Misha', surName: 'Nikolaev', age: 17, password: 'dlkflsdkfl', subjects: [TestData.subject[4]]},
    {id: 6, name: 'Dasha', surName: 'Shabonkina', age: 15, password: 'ASDdsd', subjects: [TestData.subject[5]]}
  ];
}
