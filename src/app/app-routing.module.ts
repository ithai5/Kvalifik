import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {CollectionsComponent} from './collections/collections.component';
import {PostListComponent} from './POST/postList/postList.component';
import {EditPostComponent} from './POST/edit-post/edit-post.component';
import {ViewPostComponent} from './POST/view-post/view-post.component';
import {LoginComponent} from './authentication/login/login.component';
import {SignupComponent} from './authentication/signup/signup.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'postList', component: PostListComponent},
  {path: 'postList/edit', component: EditPostComponent},
  {path: 'postList/:id', component: ViewPostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
