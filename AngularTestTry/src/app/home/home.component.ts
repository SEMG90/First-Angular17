import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecommendComponent } from '../recommend/recommend.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RecommendComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'AngularTestTry';


}
