import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Ranking } from 'src/app/core/models/ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';
@Component({
  selector: 'app-sign-in-section',
  templateUrl: './sign-in-section.component.html',
  styleUrls: ['./sign-in-section.component.css']
})
export class SignInSectionComponent implements OnInit{

  constructor(private servRanking:RankingService,private ActivatedRoute :ActivatedRoute){}

  rankings:Ranking[]

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.params['codeComp'])
    this.getRankings(this.ActivatedRoute.snapshot.params['codeComp']);
  }

  getRankings(code:string){
    this.servRanking.getRankingsbyComp(code).subscribe((data:Ranking[])=>{
      this.rankings=data;
    });
  }




}
