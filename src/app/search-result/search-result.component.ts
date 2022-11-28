import { Component, ElementRef, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { activity, Activity } from '../models/activitymodels';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  activity$:Observable<Activity> = new Observable<Activity>();
  collapse$:Observable<boolean> = new Observable<boolean>();

  constructor(private service:ActivityService,private el:ElementRef) {
    this.activity$ = this.service.activity$.pipe(response => {
      console.log(response)
      return response;
    });
    this.collapse$ = this.service.collapse$.pipe(map(result => {return result;}))
  }

  ngOnInit(): void {

  }

}
