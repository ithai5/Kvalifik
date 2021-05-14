import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from './EVENT/event-list/event-list.component';
import {CollectionsComponent} from './collections/collections.component';
import {PostListComponent} from './POST/postList/postList.component';
import {EditPostComponent} from './POST/edit-post/edit-post.component';
import {ViewPostComponent} from './POST/view-post/view-post.component';
import {LoginComponent} from './authentication/login/login.component';
import {SignupComponent} from './authentication/signup/signup.component';
import { UserListComponent } from './USER/user-list/user-list.component';


const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'postList', component: PostListComponent},
  {path: 'postList/edit', component: EditPostComponent},
  {path: 'postList/:id', component: ViewPostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', component: UserListComponent}

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{}
