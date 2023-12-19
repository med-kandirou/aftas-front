import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { min } from 'moment';
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

  visible:Boolean=false

  initform():void{
    this.cometitionForm=this.fb.group({
      code: "",
      date: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      endTime: ['', Validators.required],
      numberOfParticipants: ['1', Validators.required],
      location: [null, Validators.required],
      amount: ['0', Validators.required],
    });
  }
  @Output() added = new EventEmitter<void>();
  onSubmit() {
    console.log(this.cometitionForm);
    if (this.cometitionForm.valid) {
      const formData: FormGroup = this.cometitionForm.value;
        this.compService.save(formData).subscribe((data:Competition)=>{
          this.initform();
          this.added.emit();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Added successfully"
          });
        });
    } else {
      console.log("log");
    }
  }
}
