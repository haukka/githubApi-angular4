import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchGitusersComponent } from './search-gitusers/search-gitusers.component';
import { SearchGitusersService } from './search-gitusers.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchGitusersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SearchGitusersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
