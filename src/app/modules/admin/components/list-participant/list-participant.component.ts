import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/core/models/ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { Competition } from 'src/app/core/models/competition.model';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  constructor(private servRanking:RankingService,private servCompetition:CompetitionService,private ActivatedRoute :ActivatedRoute,private router: Router){}

  rankings:Ranking[]
  code:string
  checkday:number;
  competition:Competition;

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
      this.competition=data;
      this.checkday=this.getDayDifference(data.date);
    });
  }

  calculeRanks(){
    this.servRanking.calculeRanks(this.code).subscribe((data:any)=>{
      this.router.navigate(['/admin/competition/'+this.code+'/podium']);
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

  member_id:number;
  competition_code:string;
  addHintVisible:Boolean=false;
  getNumparticiapnt(value: number) {
    this.member_id=value;
    this.competition_code=this.competition.code;
    this.addHintVisible=true;
  }

}
