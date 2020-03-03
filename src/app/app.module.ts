import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventComponent } from './events.component';
import { CrawledsComponent } from './crawleds.component';
import { AddCrawledComponent } from './mutates.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EventComponent,
    CrawledsComponent,
    AddCrawledComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
