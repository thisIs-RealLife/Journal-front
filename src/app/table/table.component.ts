import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../Model/Student';
import {StudentService} from '../DAO/implements/student.service';
import {TestDataService} from '../service/TestData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  columnsToDisplay: string[] = ['id', 'name', 'surname', 'age', 'Options'];
  dataSource: MatTableDataSource<Student>;
  students: Student[];
  expandedElement: Student;


  constructor(private studentService: StudentService, private testData: TestDataService) {
  }

  ngOnInit(): void {
    // this.studentService.getAll().subscribe(value => {
    //   this.students = valu e;
    //   this.dataSource = new MatTableDataSource<Student>();
    //   this.dataSource.data = this.students;
    // });
    this.dataSource = new MatTableDataSource<Student>(this.testData.getStudent());
  }

  display(value: string): void {
    console.log(value);
  }
}
