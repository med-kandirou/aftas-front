import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute  } from '@angular/router';
import { App_user } from 'src/app/core/models/app_user.model';
import { Ranking } from 'src/app/core/models/ranking.model';
import { MemberService } from 'src/app/core/services/member.service';
import { RankingService } from 'src/app/core/services/ranking.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-add-rank',
  templateUrl: './list-add-rank.component.html',
  styleUrls: ['./list-add-rank.component.css']
})
export class ListAddRankComponent {

  constructor(private ActivatedRoute :ActivatedRoute,private servMember:MemberService,private servRank:RankingService,private fb:FormBuilder){}

  code:string
  members:App_user[]
  ngOnInit(): void {
    this.code=this.ActivatedRoute.snapshot.params['codeComp']
    this.getMemberNotExistInComp(this.code)
  }

  getMemberNotExistInComp(code:string){
    this.servMember.getMemberNotExistInComp(code).subscribe((data:App_user[])=>{
      this.members=data;
    })
  }

  save(code:string ,num:number){
    let rankingData = {
      "rankingId": {
        "member": {
          "num": num
        },
        "competition": {
          "code":code
        }
      },
      "rank": 0,
      "score": 0
    };
    this.servRank.save(rankingData).subscribe((data:Ranking)=>{
      this.getMemberNotExistInComp(this.code);
      Swal.fire({
        title: "success!",
        text: "The member was subscribed!",
        icon: "success"
      });
    })
  }

  search($event:string){
    this.servMember.search(this.code,$event).subscribe((data:App_user[])=>{
      this.members=data;
    })
  }
}
