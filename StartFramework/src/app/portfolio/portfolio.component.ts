import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ICards{
  images:string;
}
  
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  title='StartFramework';

  CardsImage:ICards[] = [
  {
    images: './assets/images/home.jpg'
  },
  {
    images: './assets/images/cake.jpg'
  },
  {
    images: './assets/images/market.jpg'
  },
  {
    images: './assets/images/home.jpg'
  },
  {
    images: './assets/images/cake.jpg'
  },
  {
    images: './assets/images/market.jpg'
  }
]
}
