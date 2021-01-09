import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Student} from '../Model/Student';
import {SubjectService} from '../DAO/implements/subject.service';
import {Subject} from '../Model/Subject';

@Component({
  selector: 'app-dialog-add-subject',
  templateUrl: './dialog-add-subject.component.html',
  styleUrls: ['./dialog-add-subject.component.css']
})
export class DialogAddSubjectComponent implements OnInit {
  subject: Subject;
  name: string;
  professor: string;
  mark;

  constructor(public dialogRef: MatDialogRef<DialogAddSubjectComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Subject, Student],
              private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  outDialog(): void {
    this.dialogRef.close();
  }

  editSubject(): void {
    this.subject = new Subject(this.name, this.professor, this.mark);
    this.subjectService.add(this.subject, this.data[1]).subscribe(result => console.log(result));
    this.outDialog();
  }
}
