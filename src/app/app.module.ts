import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventListComponent } from './components/EVENT/event-list/event-list.component';
import { PostListComponent } from './components/POST/postList/postList.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatTableModule } from '@angular/material/table';
import { EditPostComponent } from './components/POST/edit-post/edit-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewPostComponent } from './components/POST/view-post/view-post.component';
import {  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState, rootReducer } from './redux/state/appState';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { PostFilterPipe } from './components/POST/post-filter/post-filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { EventComponent } from './components/EVENT/event/event.component';
import { ViewEventComponent } from './components/EVENT/view-event/view-event.component';
import { EditEventComponent } from './components/EVENT/edit-event/edit-event.component';
import { UserComponent } from './components/USER/user/user.component';
import { UserListComponent } from './components/USER/user-list/user-list.component';
import { FeedComponent } from './components/feed/feed.component';
import { CardComponent } from './components/card/card.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    PostListComponent,
    CollectionsComponent,
    SidenavComponent,
    EditPostComponent,
    ViewPostComponent,
    LoginComponent,
    SignupComponent,
    PostFilterPipe,
    EventComponent,
    ViewEventComponent,
    EditEventComponent,
    UserComponent,
    UserListComponent,
    FeedComponent,
    CardComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        /** Material Inputs */
        MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
        AppRoutingModule, MatTableModule, MatFormFieldModule, MatSelectModule,
        MatInputModule, MatDialogModule, ReactiveFormsModule, MatCardModule,
        /** -------------- */
        HttpClientModule,
        NgReduxModule,

        AngularFireModule,
        AngularFireStorageModule,

      NgReduxRouterModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private ngReduxRouter: NgReduxRouter, private devTool: DevToolsExtension) {
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
    ngReduxRouter.initialize();
    }
  }
