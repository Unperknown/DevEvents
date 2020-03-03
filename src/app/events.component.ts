import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event, Query } from './models';

import gql from 'graphql-tag';

@Component({
  selector: 'app-events',
  template: `
    <a *ngFor="let event of events | async" target="_blank" rel="noopener noreferrer" [href]="event.hyperLink" [class.disabled]="event.isValid ? null : true">
      <div class="event-info" style="background-size: cover">
        <span class="title">{{ event.title }}</span>
        <span class="date">📅{{ event.date }}</span>
        <span class="price">{{ event.price }}</span>
        <span class="location">@ {{ event.location }}</span>
      </div>
    </a>
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
