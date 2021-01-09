import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../Model/Student';
import {StudentService} from '../DAO/implements/student.service';

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
    @Inject(MAT_DIALOG_DATA) public data: [Student],
    private studentService: StudentService
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

  editStudent(): void {
    this.student.name = this.name;
    this.student.surname = this.surname;
    this.student.age = this.age;
    this.student.name = this.name;
    this.studentService.update(this.student).subscribe(next => console.log(next));
    this.outDialog();
  }
}
