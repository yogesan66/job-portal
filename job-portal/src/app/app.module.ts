import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JoblistpageComponent } from './joblistpage/joblistpage.component';
import { ApplyJobPageComponent } from './apply-job-page/apply-job-page.component';
import { AppliedJobListComponent } from './applied-job-list/applied-job-list.component';
import { VieprofileComponent } from './vieprofile/vieprofile.component';
import { ApiService } from './services/api.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';  

@NgModule({
  declarations: [
    AppComponent,
    SignuppageComponent,
    HomepageComponent,
    JoblistpageComponent,
    ApplyJobPageComponent,
    AppliedJobListComponent,
    VieprofileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
