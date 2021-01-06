import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Subject} from '../Model/Subject';

@Component({
  selector: 'app-dialog-edit-subject',
  templateUrl: './dialog-edit-subject.component.html',
  styleUrls: ['./dialog-edit-subject.component.css']
})
export class DialogEditSubjectComponent implements OnInit {
  subject: Subject;
  professor = '';
  name = '';
  mark ;

  constructor(
    public dialogRef: MatDialogRef<DialogEditSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Subject]) {
  }

  ngOnInit(): void {
    this.subject = this.data[0];
    this.professor = this.subject.professor;
    this.name = this.subject.nameSubject;
    this.mark = this.subject.mark.mark;
  }
}
