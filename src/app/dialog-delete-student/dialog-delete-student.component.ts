import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../Model/Student';

@Component({
  selector: 'app-dialog-delete-student',
  templateUrl: './dialog-delete-student.component.html',
  styleUrls: ['./dialog-delete-student.component.css']
})
export class DialogDeleteStudentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Student]
  ) { }

  ngOnInit(): void {
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  deleteSubject(): void {
    this.outDialog();
  }
}
