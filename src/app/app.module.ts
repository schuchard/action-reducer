import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import * as counter2Actions from './store/counter2.actions';
import actionWrapper from 'src/lib/action-wrapper';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, count2: actionWrapper(counter2Actions, 0) }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
