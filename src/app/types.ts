export type Crawled = {
  title: string;
  date: string;
  location: string;
  price: number;
  hyperLink: string;
  imageLink: string;
  isValid: boolean;
}

export type Crawleds = {
  crawleds: Crawled[];
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

export type Events = {
  events: Event[];
}

export type Requestor = {
  name: string;
}

export type Requestors = {
  requestors: Requestor[];
}