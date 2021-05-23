import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from './components/EVENT/event-list/event-list.component';
import {CollectionsComponent} from './components/collections/collections.component';
import {PostListComponent} from './components/POST/postList/postList.component';
import {EditPostComponent} from './components/POST/edit-post/edit-post.component';
import {ViewPostComponent} from './components/POST/view-post/view-post.component';
import {LoginComponent} from './components/authentication/login/login.component';
import {SignupComponent} from './components/authentication/signup/signup.component';
import { UserListComponent } from './components/USER/user-list/user-list.component';
import {FeedComponent} from './components/feed/feed.component';


const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'postList', component: PostListComponent},
  {path: 'postList/edit', component: EditPostComponent},
  {path: 'postList/:id', component: ViewPostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', redirectTo: 'postList'},
  {path: 'users', component: UserListComponent},
  {path: 'feed', component: FeedComponent}

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
