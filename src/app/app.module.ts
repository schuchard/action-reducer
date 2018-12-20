import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter1.reducer';
import * as counter2Actions from './store/counter2.actions';
import { actionReducer } from 'src/lib/action-reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count1: counterReducer,
      count2: actionReducer(counter2Actions, 0),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
