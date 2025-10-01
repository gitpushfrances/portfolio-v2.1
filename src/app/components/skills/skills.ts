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
    { name: 'Angular', icon: '⚡', category: 'Frontend' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'Bootstrap', icon: '📱', category: 'Frontend' },
    { name: 'Tailwind', icon: '💨', category: 'Frontend' },
    { name: 'Figma', icon: '🎯', category: 'Frontend' },
    
    // Backend
    { name: 'Laravel', icon: '🔺', category: 'Backend' },
    { name: 'REST API', icon: '🔌', category: 'Backend' },
    { name: 'MySQL', icon: '🗄️', category: 'Backend' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    
    // Mobile
    { name: 'Android', icon: '🤖', category: 'Mobile' },
    { name: 'Java', icon: '☕', category: 'Mobile' },
    { name: 'Flutter', icon: '💙', category: 'Mobile' },
    
    // Tools
    { name: 'Git', icon: '📚', category: 'Tools' },
    { name: 'GitHub', icon: '🐙', category: 'Tools' },
    { name: 'Postman', icon: '📮', category: 'Tools' },
    { name: 'Jira', icon: '📊', category: 'Tools' },
    
    // Other
    { name: 'IoT', icon: '🔧', category: 'Other' },
    { name: 'Arduino', icon: '⚙️', category: 'Other' },
    { name: 'CI/CD', icon: '🚀', category: 'Other' }
  ];

  get categories() {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }
}