import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../Model/Student';
import {StudentService} from '../DAO/implements/student.service';
import {TestDataService} from '../service/TestData.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditSubjectComponent} from '../dialog-edit-subject/dialog-edit-subject.component';
import {Subject} from '../Model/Subject';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DialogEditStudentComponent} from '../dialog-edit-student/dialog-edit-student.component';
import {DialogDeleteStudentComponent} from '../dialog-delete-student/dialog-delete-student.component';
import {DialogDeleteSubjectComponent} from '../dialog-delete-subject/dialog-delete-subject.component';

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
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'Options'];
  dataSource: MatTableDataSource<Student>;
  students: Student[];
  expandedElement: Student;


  constructor(private studentService: StudentService,
              private testData: TestDataService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>(this.testData.getStudent());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  addTableFunction(): void {
    // this.dataSource.sortingDataAccessor = (student, col) => {
    //   switch (col){
    //     case 'name':
    //   }
    // };
  }

  deleteStudent(student: Student, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteStudentComponent, {
      data: [student]
    });
  }

  deleteSubject(subject: Subject, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteSubjectComponent, {
      data: [subject]
    });
  }

  editStudent(student: Student, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogEditStudentComponent, {
      data: [student]
    });
  }

  editSubject(subject: Subject): void {
    const dialogRef = this.dialog.open(DialogEditSubjectComponent, {
      data: [subject]
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
