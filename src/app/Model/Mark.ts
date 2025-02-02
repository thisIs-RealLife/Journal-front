import {Subject} from './Subject';

export class Mark {
  id: number;
  mark: number;
  subject: Subject;

  constructor(mark: number) {
    this.mark = mark;
  }
}
