import { Component } from '@angular/core';
import { HomeComponent } from './home/home';
import { Dramas } from './dramas/dramas';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, Dramas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
