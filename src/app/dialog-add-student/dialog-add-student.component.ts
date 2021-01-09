import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../DAO/implements/student.service';
import {Student} from '../Model/Student';

@Component({
  selector: 'app-dialog-add-student',
  templateUrl: './dialog-add-student.component.html',
  styleUrls: ['./dialog-add-student.component.css']
})
export class DialogAddStudentComponent implements OnInit {
  student: Student;
  name: string;
  surname: string;
  age: number;
  password: string;

  constructor(public dialogRef: MatDialogRef<DialogAddStudentComponent>, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  addStudent(): void {
    this.student = new Student(this.name, this.surname, this.age, this.password);
    console.log(this.student);
    this.studentService.add(this.student).subscribe(result => console.log(result));
    this.outDialog();
  }
}
