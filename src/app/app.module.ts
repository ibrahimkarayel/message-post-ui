import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ErrorComponent} from './components/error/error.component';
import {PostComponent} from './components/post/post.component';
import {ConfirmationDialogComponent} from './components/shared/confirmation-dialog/confirmation-dialog.component';
import {PostDialogComponent} from './components/shared/post-dialog/post-dialog.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSelectModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    PostComponent,
    ConfirmationDialogComponent,
    PostDialogComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [PostDialogComponent, ConfirmationDialogComponent]
})
export class AppModule {
}
