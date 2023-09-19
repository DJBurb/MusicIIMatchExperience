import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Results } from '../models/results.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation){
      this.results = navigation.extras.state;
    }
  }

  ngOnInit(): void {

  }

}
