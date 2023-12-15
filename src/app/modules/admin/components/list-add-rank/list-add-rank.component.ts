import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute  } from '@angular/router';
import { Member } from 'src/app/core/models/member.model';
import { Ranking } from 'src/app/core/models/ranking.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { RankingService } from 'src/app/core/services/ranking.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-add-rank',
  templateUrl: './list-add-rank.component.html',
  styleUrls: ['./list-add-rank.component.css']
})
export class ListAddRankComponent {

  constructor(private ActivatedRoute :ActivatedRoute,private servCompetition:CompetitionService,private servRank:RankingService,private fb:FormBuilder){}

  code:string
  members:Member[]
  ngOnInit(): void {
    this.code=this.ActivatedRoute.snapshot.params['codeComp']
    this.getMemberNotExistInComp(this.code)
  }

  getMemberNotExistInComp(code:string){
    this.servCompetition.getMemberNotExistInComp(code).subscribe((data:Member[])=>{
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
        text: "The mamaber was subscribed!",
        icon: "success"
      });
    })
  }
}
