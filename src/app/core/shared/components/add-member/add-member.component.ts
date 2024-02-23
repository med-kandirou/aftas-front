import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { App_user } from 'src/app/core/models/app_user.model';
import { MemberService } from 'src/app/core/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  visible:boolean=false
  

  constructor(private fb:FormBuilder,private compService:MemberService){}
  ngOnInit(): void {
    this.initform();
  }
  memberForm: any;
  initform():void{
    this.memberForm=this.fb.group({
      name: [null, [Validators.required]],
      familyName: [null, [Validators.required]],
      accessionDate: [new Date()],
      nationality: [null, Validators.required],
      identityDocument: [null, Validators.required],
      identityNumber: [null, Validators.required],
    });
  }
  @Output() added = new EventEmitter<void>();
  onSubmit() {
    console.log(this.memberForm);
    if (this.memberForm.valid) {
      const formData: FormGroup = this.memberForm.value;
        this.compService.save(formData).subscribe((data:App_user)=>{
          this.initform();
          this.added.emit();
          this.visible=false
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: ""+data.name+" added successfully"
          });
        });
    } else {
      console.log("log");
    }
  }
  index:string
  @Output() search = new EventEmitter<string>();

}
