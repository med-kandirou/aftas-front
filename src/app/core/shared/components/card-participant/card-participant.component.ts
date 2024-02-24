import { Component, EventEmitter, Input, Output } from '@angular/core';
import { App_user } from 'src/app/core/models/app_user.model';

@Component({
  selector: 'app-card-participant',
  templateUrl: './card-participant.component.html',
  styleUrls: ['./card-participant.component.css']
})
export class CardParticipantComponent {

  role:String|null;
  constructor(){
    this.role=localStorage.getItem('role');
  }

  @Input() participant:App_user
  @Input() visible: boolean;

  @Output() numEmitter = new EventEmitter<number>();

  emitNum(num:number) {
    this.numEmitter.emit(num);
  }
}
