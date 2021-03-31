import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { PostsComponent } from './POST/view-post/posts.component';
import { CollectionsComponent } from './collections/collections.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatTableModule} from '@angular/material/table';
import { EditPostComponent } from './POST/edit-post/edit-post.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { PostComponent } from './POST/post/post.component';
import { ViewPostComponent } from './POST/view-post/view-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store'
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
//import { rootReducer } from './redux/reducer';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    PostsComponent,
    CollectionsComponent,
    SidenavComponent,
    EditPostComponent,
    PostComponent,
    ViewPostComponent,
    UploadFileComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        /** Material Inputs */
        MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
        AppRoutingModule, MatTableModule, MatFormFieldModule, MatSelectModule,
        MatInputModule, MatDialogModule, ReactiveFormsModule,
        /** -------------- */
        HttpClientModule,
        NgReduxModule,
        NgReduxRouterModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*constructor(private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter) {
   
    //this.ngRedux.configureStore(rootReducer, {});
 
      ngReduxRouter.initialize();   
  }*/
} 
