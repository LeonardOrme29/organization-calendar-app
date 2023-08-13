import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NotesComponent } from './notes/notes.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    NotesComponent,
    SideBarComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
