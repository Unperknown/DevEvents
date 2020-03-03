export type Crawled = {
  title: string;
  date: string;
  location: string;
  price: number;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export type Event = {
  title: string;
  date: string;
  location: string;
  price: string;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export type Requestor = {
  name: string;
}

export type Query = {
  crawled(id: string): Crawled;
  crawleds: Crawled[];

  event(id: string): Event;
  events: Event[];
  requestors: Requestor[];
}
