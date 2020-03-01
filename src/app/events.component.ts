import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Events } from './types';

import gql from 'graphql-tag';

@Component({
  selector: 'events',
  template: `
    <a *ngFor="let event of events" target="_blank" rel="noopener noreferrer" [href]="event.hyperLink" [class.disabled]="event.isValid ? null : true">
      <div class="event-info" style="background-size: cover">
        <span class="event-title">{{ event.title }}</span>
        <span class="event-date">📅{{ event.date }}</span>
        <span class="event-price">{{ event.price }}</span>
        <span class="event-location">@ {{ event.location }}</span>
      </div>
    </a>
  `,
  styleUrls: ['./app.component.sass']
})

export class EventComponent implements OnInit, OnDestroy {
  events: Events;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: gql`
        query {
          events {
            title
            date
            location
            price,
            imageLink,
            hyperLink,
            isValid
          }
        }
      `
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.events = data.events;
      });
  }
  
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
