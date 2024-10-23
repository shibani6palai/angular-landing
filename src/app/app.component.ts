import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Adjust paths as necessary
import { HeroComponent } from './hero/hero.component'; // Adjust paths as necessary
import { FeaturesComponent } from './features/features.component'; // Adjust paths as necessary
import { FooterComponent } from './footer/footer.component'; // Adjust paths as necessary
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroComponent,FeaturesComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
}
