import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Crawled, Query } from './models';

import gql from 'graphql-tag';

@Component({
  selector: 'app-crawleds',
  template: `
    <ul *ngFor="let crawled of crawleds | async">
      <li>{{ crawled.title }}, {{ crawled.date }}, {{ crawled.price }}, {{ crawled.location }}</li>
    </ul>
  `
})
export class CrawledsComponent implements OnInit {
  crawleds: Observable<Crawled[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.crawleds = this.apollo.watchQuery<Query>({
      query: gql`
        query {
          crawleds {
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
        map(result => result.data.crawleds)
      )
  }
}
