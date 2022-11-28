import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Activity, activity, activitySearch, errorResponse} from './models/activitymodels';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //for showing the errors
  _errors:BehaviorSubject<errorResponse> = new BehaviorSubject<errorResponse>(new errorResponse());
  errors$ = this._errors.asObservable();

  //to set new activity
  _activity:BehaviorSubject<activity> = new BehaviorSubject<Activity>(new Activity());
  activity$ = this._activity.asObservable();

  //to set list of activities previously preferred
  _listActivity:BehaviorSubject<Array<activity>> = new BehaviorSubject<Array<activity>>([]);
  listActivity$ = this._listActivity.asObservable();

  //collapse all opened details while searching
  private _collapse:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  collapse$ = this._collapse.asObservable();

  public get collapse() : boolean{
    return this._collapse.getValue();
  }

  public set collapse(value:boolean){
    this._collapse.next(value);
  }

  constructor(private http:HttpClient) { }

  //to fetch the activity
  getActivity(search:activitySearch){
    let url = "https://www.boredapi.com/api/activity/?"
    if(search.type != '')
    {
      url += "type="+ search.type +"&"
    }
    if(search.numberOfParticipents > 0)
    {
      url += "participants="+ search.numberOfParticipents + "&"
    }
    if(search.relativePrice != null)
    {
      url += "price="+ search.relativePrice + "&"
    }
    if(search.rating > 0)
    {
      url += "accessibility="+ search.rating
    }
    this.http.get(url).subscribe(result => {
      let errorResponse = result as errorResponse;
      if(errorResponse && errorResponse.error != undefined && errorResponse.error != '')
      {
        this._errors.next(errorResponse);
        console.log(errorResponse)
      } else {
        this._errors.next(errorResponse);
        let newActivity = result as Activity;
        if(newActivity != null && newActivity.activity != '')
        {
          this._activity.next(result as Activity);
          let activities = this._listActivity.getValue()
          if(activities.filter(item => {item.key == newActivity.key}).length == 0)
          {
            activities.push(result as Activity);
          }
          this._listActivity.next(activities);
          this.collapse = false;
          let e = document.getElementsByClassName('accordion-collapse');
          let index = 0;
          for(index = 0; index < e.length;index++){
            e[index].classList.remove('show');
          }
        }
      }
    },err=>{
      console.log(err)
    });
  }
}
