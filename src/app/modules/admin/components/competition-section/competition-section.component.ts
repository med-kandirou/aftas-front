import { Component } from '@angular/core';
import { Competition } from 'src/app/core/models/competition.model';
import { CompetitionService } from 'src/app/core/services/competition.service';

@Component({
  selector: 'app-competition-section',
  templateUrl: './competition-section.component.html',
  styleUrls: ['./competition-section.component.css']
})
export class CompetitionSectionComponent {

  role:string|null;
  constructor(private seviceComp:CompetitionService){
    this.role=localStorage.getItem('role');
  }

  currentPage: number=0;
  currentSize: number=2;
  currentfiltre: string="pending";
  totalPages: number=0;

  ngOnInit(): void {
    this.getCompetitions(this.currentPage,this.currentSize,this.currentfiltre);
  }

  competitions:Competition[]

  getCompetitions(page:number,size:number,filtre:string):void{
    this.seviceComp.getcompetitions(page,size,filtre).subscribe((data:any)=>{
      this.totalPages=data.totalPages;
      this.competitions=data.content;
    })
  }

  
  changefiltre(filtre: any) {
    this.currentPage=0;
    this.currentfiltre=filtre.value;
    this.getCompetitions(this.currentPage,this.currentSize,this.currentfiltre);
    console.log(this.competitions)
  }

  paginate(page:number):void{
    this.currentPage=page;
    this.getCompetitions(this.currentPage,this.currentSize,this.currentfiltre);
  }

  nextPage(currentPage:number):void{
    if(currentPage+1==this.totalPages){
      return
    }
    this.currentPage=currentPage+1;
    this.getCompetitions(this.currentPage,this.currentSize,this.currentfiltre);
  }

  previousPage(currentPage:number){
    if(currentPage==0){
      return
    }
    this.currentPage=currentPage-1;
    this.getCompetitions(this.currentPage,this.currentSize,this.currentfiltre);
  }

}
