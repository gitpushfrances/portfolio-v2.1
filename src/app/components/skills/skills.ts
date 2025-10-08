import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', icon: 'angular', category: 'Frontend' },
    { name: 'HTML5', icon: 'html5', category: 'Frontend' },
    { name: 'CSS3', icon: 'css3', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
    { name: 'Figma', icon: 'figma', category: 'Frontend' },

    // Backend
    { name: 'Laravel', icon: 'laravel', category: 'Backend' },
    { name: 'PHP', icon: 'php', category: 'Backend' },
    { name: 'MySQL', icon: 'mysql', category: 'Backend' },
    { name: 'Firebase', icon: 'firebase', category: 'Backend' },

    // Mobile
    { name: 'Android', icon: 'android', category: 'Mobile' },
    { name: 'Java', icon: 'openjdk', category: 'Mobile' },
    { name: 'Flutter', icon: 'flutter', category: 'Mobile' },

    // Tools
    { name: 'Git', icon: 'git', category: 'Tools' },
    { name: 'GitHub', icon: 'github', category: 'Tools' },
    { name: 'Postman', icon: 'postman', category: 'Tools' },
    { name: 'Jira', icon: 'jira', category: 'Tools' }
  ];

  get categories() {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }

  getIconUrl(icon: string): string {
    return `https://cdn.simpleicons.org/${icon}`;
  }
}
