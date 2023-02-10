import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsefulChildComponent } from './useful-child/useful-child.component';

@NgModule({
  declarations: [
    AppComponent,
    UsefulChildComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
