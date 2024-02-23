import { Component } from '@angular/core';
import { App_user } from 'src/app/core/models/app_user.model';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private memberServ: MemberService) { }

  members:App_user[];

  ngOnInit(): void {
    this.memberServ.getAll().subscribe((data:App_user[])=>{
      this.members=data;
    });
  }

  updateRole(m:App_user) {
    this.memberServ.updateRole(m).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
