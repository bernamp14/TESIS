import { Component } from '@angular/core';
import { DashboardComponent } from './components/comun/dashboard/dashboard.component'
import { LoginComponent } from './components/login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public logueado:boolean = false;
}
