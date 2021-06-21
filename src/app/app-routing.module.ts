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
import {RouterGuard} from './router.guard';
import { EditEventComponent } from './components/EVENT/edit-event/edit-event.component';
import { ViewEventComponent } from './components/EVENT/view-event/view-event.component';
import {AuthUserGuard} from './auth-user.guard';


const routes: Routes = [
  {path: 'eventList', component: EventListComponent, canActivate: [AuthUserGuard]},
  {path: 'eventList/edit', component: EditEventComponent, canActivate: [AuthUserGuard]},
  {path: 'eventList/viewEvent', component: ViewEventComponent},
  {path: 'collections', component: CollectionsComponent, canActivate: [AuthUserGuard]},
  {path: 'postList', component: PostListComponent, canActivate: [AuthUserGuard]},
  {path: 'postList/edit', component: EditPostComponent, canActivate: [AuthUserGuard]},
  {path: 'postList/viewPost', component: ViewPostComponent},
  {path: 'login', component: LoginComponent, canActivate: [RouterGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [RouterGuard]},
  {path: 'logout', redirectTo: 'postList'},
  //{path: 'users', component: UserListComponent, canActivate: [AuthUserGuard]}, doesn't have any functionality
  {path: 'feed', component: FeedComponent}

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
