import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'BRP-Workforce',
      description: 'Employee login and records management system with optimized frontend and backend. Features include certification console and recruitment workflows.',
      image: '🏢',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Jira'],
      featured: true
    },
    {
      title: 'AMDC Recruitment Platform',
      description: 'Healthcare recruitment platform with role-based access control, appointment scheduling, and priority ticketing system.',
      image: '🏥',
      technologies: ['Laravel', 'Bootstrap', 'MySQL', 'Figma'],
      featured: true
    },
    {
      title: 'Arduino Writing Board Wiper',
      description: 'IoT-based capstone project featuring Arduino-driven automation with mobile app interface for remote control and monitoring.',
      image: '🤖',
      technologies: ['Arduino', 'IoT', 'Android', 'Java'],
      github: 'https://github.com/gitpushfrances',
      featured: false
    },
    {
      title: 'Customer Portal Optimization',
      description: 'Enhanced Customer-Web and Palawan-Partner applications by fixing API rate limiting issues and improving request handling.',
      image: '🌐',
      technologies: ['Angular', 'REST API', 'Performance'],
      featured: false
    }
  ];

  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  get otherProjects() {
    return this.projects.filter(p => !p.featured);
  }
}