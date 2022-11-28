import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../activity.service';
import { activitySearch } from '../models/activitymodels';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  activityForm:FormGroup = new FormGroup({});
  activitySearch:activitySearch = new activitySearch()

  constructor(private formbuilder:FormBuilder,private service:ActivityService) {
    this.activityForm = this.formbuilder.group({
      'type':[''],
      'participants':[''],
      'price':[''],
      'accessibility':['']
    })
  }

  ngOnInit(): void {
  }

  search(){
    this.activitySearch.type = this.activityForm.get('type')?.value
    this.activitySearch.rating = this.activityForm.get('accessibility')?.value
    this.activitySearch.relativePrice = this.activityForm.get('price')?.value
    this.activitySearch.numberOfParticipents = this.activityForm.get('participants')?.value
    this.service.getActivity(this.activitySearch);
  }

}
