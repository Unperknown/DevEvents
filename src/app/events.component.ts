import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Crawled, Event, Query } from './types';

import gql from 'graphql-tag';

@Component({
  selector: 'events',
  template: `
    <a *ngFor="let event of events" target="_blank" rel="noopener noreferrer" [href]="event.hyperLink" [class.disabled]="event.isValid ? null : true">
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

export class EventComponent implements OnInit, OnDestroy {
  events: Crawled[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<Query>({
      query: gql`
        query {
          crawleds {
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
        this.events = data.crawleds;
      });
  }
  
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
