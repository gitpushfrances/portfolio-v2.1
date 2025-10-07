import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  private scrollThreshold = 50;
  private ticking = false;

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.onWindowScroll();
    this.updateActiveSection();
  }

  ngOnDestroy() {
    // Re-enable body scroll if component is destroyed while menu is open
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateScrollState();
        this.updateActiveSection();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private updateScrollState() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > this.scrollThreshold;
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    this.closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar-container');
      const navbarHeight = navbar ? navbar.clientHeight : 80;
      const yOffset = -navbarHeight - 20; // Extra padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      // Update URL without page reload
      if (history.pushState) {
        history.pushState(null, '', `#${sectionId}`);
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => item.id);
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Find the section that's currently most visible in viewport
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementHeight = element.offsetHeight;

        // Check if section is in view (with some threshold)
        if (scrollPosition >= elementTop - windowHeight / 3) {
          this.activeSection = section;
          break;
        }
      }
    }

    // Special case: if at the very top, always show home as active
    if (scrollPosition < 100) {
      this.activeSection = 'home';
    }
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isMobileMenuOpen) return;

    const target = event.target as HTMLElement;
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    if (mobileMenu &&
        !mobileMenu.contains(target) &&
        mobileMenuBtn &&
        !mobileMenuBtn.contains(target)) {
      this.closeMobileMenu();
    }
  }

  // Close mobile menu on escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  // Handle window resize
  @HostListener('window:resize')
  onResize() {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
