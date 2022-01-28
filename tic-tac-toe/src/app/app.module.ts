import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SquareComponent } from './square/square.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDividerModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
