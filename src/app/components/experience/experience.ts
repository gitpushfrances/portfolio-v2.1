import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Smart Inbox Technology',
      role: 'Full Stack Developer',
      period: 'Aug 2025 - Present',
      location: 'Remote',
      description: 'Building and optimizing enterprise-level applications using Angular and backend technologies.',
      achievements: [
        'Co-developed BRP-Workforce employee management system with Angular frontend',
        'Enhanced admin panel certification console, improving efficiency by 30%',
        'Created /online-hiring module for streamlined recruitment workflows',
        'Resolved HTTP 429 rate limit errors, improving system reliability',
        'Worked in Agile environment using Jira for sprint management'
      ],
      technologies: ['Angular', 'TypeScript', 'REST API', 'Jira', 'Git']
    },
    {
      company: 'Backride Pinas',
      role: 'Backend Dev Intern',
      period: 'Jan 2025 - Jun 2025',
      location: 'Remote',
      description: 'Developed backend features and responsive UIs for healthcare and recruitment platforms.',
      achievements: [
        'Built admin panels with role-based access control using Laravel',
        'Implemented appointment-based ticketing system',
        'Reduced average response time by 25% through priority handling',
        'Created responsive UIs with Bootstrap & Figma',
        'Contributed to AMDC Recruitment and SunCity Clinic projects'
      ],
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'Figma', 'GitHub']
    }
  ];
}