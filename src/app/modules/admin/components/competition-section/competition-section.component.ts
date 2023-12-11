import { Component } from '@angular/core';
import { Competition } from 'src/app/core/models/competition.model';
import { CompetitionService } from 'src/app/core/services/competition.service';

@Component({
  selector: 'app-competition-section',
  templateUrl: './competition-section.component.html',
  styleUrls: ['./competition-section.component.css']
})
export class CompetitionSectionComponent {
  constructor(private seviceComp:CompetitionService){}

  currentPage: number=0;
  currentSize: number=3;
  totalPages: number=0;

  ngOnInit(): void {
    this.getCompetitions(this.currentPage,this.currentSize);
  }

  competitions:Competition[]

  getCompetitions(page:number,size:number):void{
    this.seviceComp.getQuestions(page,size).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.competitions=data.content;
    })
  }



  paginate(page:number):void{
    this.currentPage=page;
    this.getCompetitions(page,this.currentSize)
  }

  nextPage(currentPage:number):void{
    if(currentPage+1==this.totalPages){
      return
    }
    this.currentPage=currentPage+1;
    this.getCompetitions(this.currentPage,this.currentSize);
  }

  previousPage(currentPage:number){
    if(currentPage==0){
      return
    }
    this.currentPage=currentPage-1;
    this.getCompetitions(this.currentPage,this.currentSize);
  }

}
