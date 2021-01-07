import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../Model/Student';

@Component({
  selector: 'app-dialog-edit-student',
  templateUrl: './dialog-edit-student.component.html',
  styleUrls: ['./dialog-edit-student.component.css']
})
export class DialogEditStudentComponent implements OnInit {
  student: Student;
  name: string;
  surname: string;
  age;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Student]
  ) { }

  ngOnInit(): void {
    this.student = this.data[0];
    this.name = this.student.name;
    this.surname = this.student.surname;
    this.age = this.student.age;
    this.password = this.student.password;
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  editSubject(): void {
    this.outDialog();
  }
}
