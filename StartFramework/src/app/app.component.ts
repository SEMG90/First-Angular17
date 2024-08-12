import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { HomeComponent } from '../app/home/home.component';
import { TopFooterComponent } from '../app/top-footer/top-footer.component';
import { FooterComponent } from '../app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,TopFooterComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StartFramework';
}
