export interface Crawled {
  title: string;
  date: string;
  location: string;
  price: number;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export interface CrawledInput {
  title: string;
  date: string;
  location: string;
  price: string;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export interface Event {
  title: string;
  date: string;
  location: string;
  price: string;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export interface EventInput {
  title: string;
  date: string;
  location: string;
  price: string;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export interface Requestor {
  name: string;
}

export interface Query {
  crawled(id: string): Crawled;
  crawleds: Crawled[];

  event(id: string): Event;
  events: Event[];
  requestors: Requestor[];
}