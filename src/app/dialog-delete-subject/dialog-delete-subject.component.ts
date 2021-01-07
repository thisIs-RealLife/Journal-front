import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Subject} from '../Model/Subject';

@Component({
  selector: 'app-dialog-delete-subject',
  templateUrl: './dialog-delete-subject.component.html',
  styleUrls: ['./dialog-delete-subject.component.css']
})
export class DialogDeleteSubjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Subject]
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
