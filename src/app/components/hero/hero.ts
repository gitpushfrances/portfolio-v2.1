import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  displayedRole = '';
  roles = [
    'Full-Stack Developer',
    'Angular Developer',
    'Laravel Developer',
    'Mobile Developer'
  ];
  currentRoleIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (!this.isDeleting) {
      if (this.displayedRole.length < currentRole.length) {
        this.displayedRole = currentRole.substring(0, this.displayedRole.length + 1);
        setTimeout(() => this.typeEffect(), 100);
      } else {
        setTimeout(() => {
          this.isDeleting = true;
          this.typeEffect();
        }, 2000);
      }
    } else {
      if (this.displayedRole.length > 0) {
        this.displayedRole = currentRole.substring(0, this.displayedRole.length - 1);
        setTimeout(() => this.typeEffect(), 50);
      } else {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => this.typeEffect(), 500);
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  downloadResume() {
    // Update this path to your actual resume file
    window.open('assets/resume.pdf', '_blank');
  }
}