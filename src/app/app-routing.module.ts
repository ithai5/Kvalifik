import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {CollectionsComponent} from './collections/collections.component';
import {PostsComponent} from './POST/posts/posts.component';
import {EditPostComponent} from './POST/edit-post/edit-post.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/edit', component: EditPostComponent},

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
