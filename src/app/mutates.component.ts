import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'admin-fetcher',
  template: `
    <button (click)="fetch()">
      Fetch Crawled Data
    </button>
  `
})
export class FetchCrawledsComponent {
  constructor(private apollo: Apollo) {}

  fetch() {
    this.apollo.mutate({
      mutation: gql`
        mutation {
          fetchCrawledData {
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
    }).subscribe();
  }
}

@Component({
  selector: 'user-fetcher',
  template: `
    <button type="button" (click)="submit()">
      Submit Crawled Data
    </button>
  `
})
export class AddCrawledComponent {
  constructor(private apollo: Apollo) {}

  submit() {
    this.apollo.mutate({
      mutation: gql`
        mutation addCrawledData($crawled: CrawledInput, $requestor: String) {
          addCrawledData(crawled: $crawled) {
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
    }).subscribe();
  }
}

@Component({
  selector: 'admin-inserter',
  template: `
    <button (click)="insert()">
      Insert Event Data
    </button>
  `
})
export class AddEventComponent {
  constructor(private apollo: Apollo) {}

  insert() {
    this.apollo.mutate({
      mutation: gql`
        mutation addEvent($event: EventInput) {
          addEvent(event: $event) {
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
    }).subscribe();
  }
}

@Component({
  selector: 'admin-inserter',
  template: `
    <button (click)="update()">
      Update Event Data
    </button>
  `
})
export class UpdateEventComponent {
  constructor(private apollo: Apollo) {}

  update() {
    this.apollo.mutate({
      mutation: gql`
        mutation updateEvent($id: String, $event: EventInput) {
          updateEvent(id: $id, event: $event) {
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
    }).subscribe();
  }
}

@Component({
  selector: 'admin-inserter',
  template: `
    <button (click)="remove()">
      Remove Event Data
    </button>
  `
})
export class RemoveEventComponent {
  constructor(private apollo: Apollo) {}

  remove() {
    this.apollo.mutate({
      mutation: gql`
        mutation removeEvent($id: String) {
          removeEvent(id: $id) {
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
    }).subscribe();
  }
}

