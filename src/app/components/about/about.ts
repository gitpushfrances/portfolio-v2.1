import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  downloadResume() {
    window.open('assets/resume.pdf', '_blank');
  }
}