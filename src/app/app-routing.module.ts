import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FetchCrawledsComponent, AddEventComponent, RemoveEventComponent, UpdateEventComponent } from './mutates.component';
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
      { path: 'fetch', component: FetchCrawledsComponent },
      { path: 'insertEvent', component: AddEventComponent },
      { path: 'updateEvent', component: UpdateEventComponent },
      { path: 'removeEvent', component: RemoveEventComponent }
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
