import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-competition',
  templateUrl: './save-competition.component.html',
  styleUrls: ['./save-competition.component.css']
})
export class SaveCompetitionComponent implements OnInit{
  questionForm: any;

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.initform();
  }

  initform():void{
    this.questionForm=this.fb.group({
      code: null,
      date: [null, [Validators.required, Validators.min(0)]],
      startTime: [null, [Validators.required, Validators.min(0)]],
      endTime: ['', Validators.required],
      numberOfParticipants: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
}
