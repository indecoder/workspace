import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component'; // Import NavbarComponent
import { FooterComponent } from './core/components/footer/footer.component'; // Import FooterComponent

@Component({
  selector: 'app-root',
  standalone: true, // Make AppComponent standalone
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // Add FooterComponent to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workspace';
}
