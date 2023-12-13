import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from 'src/app/core/models/member.model';

@Component({
  selector: 'app-card-participant',
  templateUrl: './card-participant.component.html',
  styleUrls: ['./card-participant.component.css']
})
export class CardParticipantComponent {

  @Input() participant:Member
  @Input() visible: boolean;

  @Output() numEmitter = new EventEmitter<number>();

  emitNum(num:number) {
    this.numEmitter.emit(num);
  }
}
