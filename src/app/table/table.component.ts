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
import {DialogAddStudentComponent} from '../dialog-add-student/dialog-add-student.component';
import {DialogAddSubjectComponent} from "../dialog-add-subject/dialog-add-subject.component";

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
  student: Student;
  index = 0;


  constructor(private studentService: StudentService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refreshData();
    this.dataSource = new MatTableDataSource<Student>(this.students);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  refreshTable(): void {
    this.dataSource = new MatTableDataSource<Student>(this.students);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refreshData(): void {
    this.studentService.getAll().subscribe(next => {
      const students2: Student[] = next;
      this.students = students2;
      this.refreshTable();
      this.index = this.students[0].id;
    });
    this.dataSource = new MatTableDataSource<Student>(this.students);
  }



  deleteStudent(student: Student, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteStudentComponent, {
      data: [student]
    });
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }

  deleteSubject(subject: Subject, student: Student, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteSubjectComponent, {
      data: [subject, student]
    });
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }

  editStudent(student: Student, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogEditStudentComponent, {
      data: [student]
    });
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }

  editSubject(subject: Subject, student: Student): void {
    const dialogRef = this.dialog.open(DialogEditSubjectComponent, {
      data: [subject, student]
    });
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addStudent(): void {
    const dialogRef = this.dialog.open(DialogAddStudentComponent);
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }

  addSubject(student: Student, $event: MouseEvent): void {
    const dialogRef = this.dialog.open(DialogAddSubjectComponent, {
      data: [student]
    });
    dialogRef.afterClosed().subscribe(next => this.refreshData());
  }
}
