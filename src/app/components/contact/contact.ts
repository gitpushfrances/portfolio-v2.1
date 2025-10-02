import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'johnfrancesquiminaleseder@gmail.com',
      link: 'mailto:johnfrancesquiminaleseder@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+63 935 847 4023',
      link: 'tel:+639358474023'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Mercedes, Eastern Samar, Philippines',
      link: ''
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gitpushfrances',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: 'twitter'
    }
  ];

  onSubmit() {
    if (this.isSubmitting) return;

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitError = true;
      setTimeout(() => this.submitError = false, 3000);
      return;
    }

    this.isSubmitting = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
      
      setTimeout(() => this.submitSuccess = false, 5000);
    }, 1500);

    // For actual implementation, use EmailJS or your backend API:
    // Example: window.location.href = `mailto:johnfrancesquiminaleseder@gmail.com?subject=${this.formData.subject}&body=${this.formData.message}`;
  }
}