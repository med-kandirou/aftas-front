import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fish } from 'src/app/core/models/fish.model';
import { Hunting } from 'src/app/core/models/hunt.model';
import { FishService } from 'src/app/core/services/fish.service';
import { HuntService } from 'src/app/core/services/hunting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-hunt',
  templateUrl: './add-hunt.component.html',
  styleUrls: ['./add-hunt.component.css']
})
export class AddHuntComponent implements OnInit{

  constructor(private fb:FormBuilder,private huntService:HuntService,private fishService:FishService){}
  ngOnInit(): void {
    this.initform();
    this.getfish();
  }
  fishes:Fish[]
  getfish(){
    this.fishService.getFishs().subscribe((data:Fish[])=>{
      this.fishes=data;
    });
  }

  @Input() isvisible:Boolean;
  huntForm: any;
  initform():void{
    this.huntForm=this.fb.group({
      id: "",
      numberOfFish: [null, [Validators.required]],
      fish_name:[null, [Validators.required]],
      member_id: [null, [Validators.required]],
      competition_code: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.huntForm);
    if (this.huntForm.valid) {
      const formData: FormGroup = this.huntForm.value;
        this.huntService.save(formData).subscribe((data:Hunting)=>{
          console.log(data);
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
            title: "Hunt added successfully"
          });
        });
    } else {
      console.log("log");
    }
  }

}
