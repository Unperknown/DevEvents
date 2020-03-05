import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event, Query } from './models';

import gql from 'graphql-tag';

@Component({
  selector: 'app-events',
  template: `
    <div class="list-wrapper">
      <a *ngFor="let event of (events | async)" class="event-info" style="background-size: cover" [href]="event.hyperLink" [class.disabled]="event.isValid ? null : true">
        <div id="title">{{ event.title }}</div>
        <div id="location">@ {{ event.location }}</div>
        <div id="date">📅{{ event.date }}</div>
        <div id="price">{{ event.price }}</div>
      </a>
    </div>
  `,
  styleUrls: ['./app.component.sass']
})

export class EventComponent implements OnInit {
  events: Observable<Event[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.events = this.apollo.watchQuery<Query>({
      query: gql`
        query {
          events {
            title
            date
            location
            price
            imageLink
            hyperLink
            isValid
          }
        }
      `
    }).valueChanges
      .pipe(
        map(result => result.data.events)
      )
  }
}
