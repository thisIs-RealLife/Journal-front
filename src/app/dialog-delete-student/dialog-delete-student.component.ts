import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../Model/Student';
import {StudentService} from '../DAO/implements/student.service';

@Component({
  selector: 'app-dialog-delete-student',
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.css']
})
export class DialogDeleteStudentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Student],
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  deleteSubject(): void {
    this.studentService.delete(this.data[0]).subscribe(result => console.log(result));
    this.outDialog();
  }
}
