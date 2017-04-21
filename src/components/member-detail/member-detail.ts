import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'member-detail',
  templateUrl: 'member-detail.html'
})
export class MemberDetailComponent {
  @Input() member:any
  @Output() getMemberData = new EventEmitter<any[]>();
  constructor() {
  }
  chooseMember(){
    this.getMemberData.emit(this.member)
  }
}
