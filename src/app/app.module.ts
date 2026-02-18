import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { PostDashboardComponent } from './shared/components/post-dahboard/post-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './shared/interrceptor/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostCardComponent,
    GetConfirmComponent,
    PostDashboardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
