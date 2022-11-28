import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivityService } from './activity.service';
import { errorResponse } from './models/activitymodels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  errorResponse$ = new Observable<errorResponse>();
  title = 'ActivityManager';
  constructor(private service:ActivityService){
    this.errorResponse$ = this.service.errors$.pipe(map(res => {return res;}))
  }
}
