import { Component } from '@angular/core';
import { Ranking } from 'src/app/core/models/ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent {
  constructor(private servRanking:RankingService,private ActivatedRoute :ActivatedRoute){}

  rankings:Ranking[]
  code:string
  possibleToadd:boolean;
  dateCompetition:Date;
  array:any
  myArray:any;
  ngOnInit(): void {
    this.code=this.ActivatedRoute.snapshot.params['codeComp']
    this.getRankings(this.code);
  }

  getRankings(code:string){
    this.servRanking.getRankingsbyComp(code).subscribe((data:Ranking[])=>{
      this.rankings=data;
      console.log(this.code.substring(3, this.code.length))
    });
  }

}
