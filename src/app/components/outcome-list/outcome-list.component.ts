import { Component, OnInit } from '@angular/core';
import { Outcome } from '../../models/Outcome';
import { OutcomeService } from '../../services/outcome.service';

@Component({
  selector: 'app-outcome-list',
  templateUrl: './outcome-list.component.html',
  styleUrls: ['./outcome-list.component.css']
})
export class OutcomeListComponent implements OnInit {

  total: number;
  outcomes?:Outcome[];

  constructor(private outcomeService:OutcomeService) { 
    this.total=0;
  }

  ngOnInit(): void {
    this.outcomeService.getOutcomes()
    .subscribe(data=>{
      this.outcomes=data;
      console.log(data)}, 
      error=>{
      console.log(error);
    });
    this.total=this.calculateTotal();
  }

  calculateTotal():number{
    let sum=0;
    this.outcomes?.forEach(value => {
      sum +=(value.amount);
    });
    return sum;
  }
}
