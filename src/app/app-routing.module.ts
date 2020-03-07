import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FetchCrawledsComponent, AddCrawledComponent, AddEventComponent, RemoveEventComponent, UpdateEventComponent } from './mutates.component';
import { EventComponent } from './events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  { 
    path: 'admin',
    component: AdminComponent,
    children: [
      FetchCrawledsComponent,
      AddCrawledComponent,
      AddEventComponent,
      RemoveEventComponent,
      UpdateEventComponent
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
