import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Crawleds } from './types';

import gql from 'graphql-tag';

@Component({
  selector: 'events',
  template: `
    <a *ngFor="let crawled of crawleds" target="_blank" rel="noopener noreferrer" [href]="crawled.hyperLink">
      <div class="event-info" style="background-size: cover">
        <span class="event-title">{{ crawled.title }}</span>
        <span class="event-date">📅{{ crawled.date }}</span>
        <span class="event-price">{{ crawled.price }}</span>
        <span class="event-location">@ {{ crawled.location }}</span>
      </div>
    </a>
  `,
  styleUrls: ['./app.component.sass']
})

export class EventComponent implements OnInit, OnDestroy {
  crawleds: Crawleds

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: gql`
        query {
          crawleds {
            title
            date
            location
            price
          }
        }
      `
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.crawleds = data.crawleds;
      });
  }
  
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
