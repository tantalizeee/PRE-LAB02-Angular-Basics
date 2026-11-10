import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Gabriel Z. Escaño';
  location = 'Angeles City, Pampanga';
  email = 'gabrielescano711@gmail.com';
  phone = '09XX XXX XXXX';

  profile = 'I am a Web Development student dedicated to learning about modern front-end architectures and building seamless digital systems. Beyond my studies, I frequently explore the intersection of code and visual art. I enjoy graphic designing and modeling virtual drift cars for Assetto Corsa as my hobbies. My ultimate professional goal is to combine engineering precision with visual storytelling to engineer intuitive, accessible, and high-performance applications for users worldwide.';

  skills = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular Framework',
    'Responsive Web Design',
    'Version Control (Git)',
    'UI/UX Prototyping',
    'Front-end Debugging',
    'Component Architecture',
    'Graphic Design & Asset Creation'
  ];

  technicalProficiencies = [
    {
      category: 'Frontend & Frameworks',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Design & Creative Tools',
      items: ['Blender', 'Affinity', 'Graphic Designing', 'Assetto Corsa Modding']
    },
    {
      category: 'Development Utilities',
      items: ['Git/GitHub', 'VS Code', 'Command Line', 'NPM Package Manager']
    }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
