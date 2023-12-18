import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from 'src/app/core/models/ranking.model';
import { RankingService } from 'src/app/core/services/ranking.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent {
  constructor(private ActivatedRoute :ActivatedRoute,private servRank:RankingService){}

  code:string
  rankings:Ranking[]=[]
  ngOnInit(): void {
    this.code=this.ActivatedRoute.snapshot.params['codeComp']
    this.getRankingbyCom(this.code)
  }

  getRankingbyCom(code:string){
    this.servRank.getRankingsbyComp(code).subscribe((data:any)=>{
      this.rankings=data;
      console.log(this.rankings)
    })
  }
}
