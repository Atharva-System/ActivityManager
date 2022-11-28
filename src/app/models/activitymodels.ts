//models for different usage
export interface activitySearch
{
  type: string;
  numberOfParticipents: number;
  relativePrice: number;
  rating: number;
}

export class activitySearch implements activitySearch
{
  type: string;
  numberOfParticipents: number;
  relativePrice: number;
  rating: number;

  constructor(){
    this.type= "";
    this.numberOfParticipents = 0;
    this.relativePrice = 0;
    this.rating = 0
  }
}

export interface activity{
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export class Activity implements activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;

  constructor(){
    this.activity = "";
    this.type = "";
    this.participants = 0;
    this.price = 0;
    this.link = "";
    this.key = "";
    this.accessibility = 0;
  }
}

export class errorResponse{
  error:string;
  constructor(){
    this.error = ''
  }
}
