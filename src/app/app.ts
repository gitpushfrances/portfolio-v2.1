import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// ✅ Correct Angular 20 style imports
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Contact
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ plural
})
export class App {
  protected readonly title = signal('portfolio-app');
}
