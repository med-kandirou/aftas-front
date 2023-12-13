import { Component } from '@angular/core';
import { Ranking } from 'src/app/core/models/ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';
import { ActivatedRoute  } from '@angular/router';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { Competition } from 'src/app/core/models/competition.model';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent {

  constructor(private servRanking:RankingService,private servCompetition:CompetitionService,private ActivatedRoute :ActivatedRoute){}

  rankings:Ranking[]
  code:string
  checkday:number;


  ngOnInit(): void {
    this.code=this.ActivatedRoute.snapshot.params['codeComp']
    this.getRankings(this.code);
    this.getCompetition(this.code);
  }

  getRankings(code:string){
    this.servRanking.getRankingsbyComp(code).subscribe((data:Ranking[])=>{
      this.rankings=data;
    });
  }

  getCompetition(code:string){
    this.servCompetition.getOne(code).subscribe((data:Competition)=>{
      this.checkday=this.getDayDifference(data.date);
    });
  }


  getDayDifference(date: Date):number{
    let dateCompetition = new Date(date);
    let currentDate = new Date(); 
    dateCompetition.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    let differenceInTime =dateCompetition.getTime()-currentDate.getTime();
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }


}
