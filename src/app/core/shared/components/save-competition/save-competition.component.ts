import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Competition } from 'src/app/core/models/competition.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-competition',
  templateUrl: './save-competition.component.html',
  styleUrls: ['./save-competition.component.css']
})
export class SaveCompetitionComponent implements OnInit{

  cometitionForm: any;

  constructor(private fb:FormBuilder,private compService:CompetitionService){}
  ngOnInit(): void {
    this.initform();
  }

  initform():void{
    this.cometitionForm=this.fb.group({
      code: null,
      date: [null, [Validators.required, Validators.min(0)]],
      startTime: [null, [Validators.required, Validators.min(0)]],
      endTime: ['', Validators.required],
      numberOfParticipants: ['', Validators.required],
      location: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.cometitionForm.valid) {
      const formData: FormGroup = this.cometitionForm.value;
        this.compService.save(formData).subscribe((data:Competition)=>{
          Swal.fire({
            title: "succes",
            text: `Competition added`,
            icon: "success"
          });
        });
    } else {
      console.log("log");
    }
  }

}
