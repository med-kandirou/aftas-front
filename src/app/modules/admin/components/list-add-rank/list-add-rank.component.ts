import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Member } from 'src/app/core/models/member.model';
import { Ranking } from 'src/app/core/models/ranking.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { RankingService } from 'src/app/core/services/ranking.service';
@Component({
  selector: 'app-list-add-rank',
  templateUrl: './list-add-rank.component.html',
  styleUrls: ['./list-add-rank.component.css']
})
export class ListAddRankComponent {
  constructor(private ActivatedRoute :ActivatedRoute,private servCompetition:CompetitionService){}

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
}
