import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material-module/material.module';
import { CreateWishComponent } from './create-wish/create-wish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ViewWishComponent } from './view-wish/view-wish.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment'; 
import { MatSpinnerOverlayComponent } from './shared/mat-spinner-overlay/mat-spinner-overlay.component';
import { WishCardComponent } from './shared/wish-card/wish-card.component';
import { WishModalComponent } from './shared/wish-modal/wish-modal.component';
import { OpenLastComponent } from './open-last/open-last.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateWishComponent,
    MainNavComponent,
    ViewWishComponent,
    MatSpinnerOverlayComponent,
    WishCardComponent,
    WishModalComponent,
    OpenLastComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), /*-> firestore configuration*/
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
