import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Subject} from '../Model/Subject';
import {Student} from "../Model/Student";
import {SubjectService} from "../DAO/implements/subject.service";

@Component({
  selector: 'app-dialog-edit-subject',
  templateUrl: './dialog-edit-subject.component.html',
  styleUrls: ['./dialog-edit-subject.component.css']
})
export class DialogEditSubjectComponent implements OnInit {
  subject: Subject;
  professor = '';
  name = '';
  mark;

  constructor(
    public dialogRef: MatDialogRef<DialogEditSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [Subject, Student],
    private subjectService: SubjectService
  ) {
  }

  ngOnInit(): void {
    this.subject = this.data[0];
    this.professor = this.subject.professor;
    this.name = this.subject.nameSubject;
    this.mark = this.subject.mark.mark;
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  editSubject(): void {
    this.subjectService.update(this.data[0], this.data[1]).subscribe(result => console.log(result));
    this.outDialog();
  }
}
