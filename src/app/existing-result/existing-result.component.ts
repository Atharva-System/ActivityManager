import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { activity } from '../models/activitymodels';

@Component({
  selector: 'app-existing-result',
  templateUrl: './existing-result.component.html',
  styleUrls: ['./existing-result.component.scss']
})
export class ExistingResultComponent implements OnInit {

  listActivity$:Observable<Array<activity>> = new Observable<Array<activity>>();
  collapse$:Observable<boolean> = new Observable<boolean>();


  constructor(private service:ActivityService) {
    this.listActivity$ = this.service.listActivity$.pipe(map(response => {
      return response;
    }))
    this.collapse$ = this.service.collapse$.pipe(map(result => {return result;}))
  }

  ngOnInit(): void {
  }

}
