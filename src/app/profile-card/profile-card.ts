import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student learning to build modern web applications with Angular. Outside of academics, I do graphic designs for the Metalheart/Depthcore aesthetic, which you can find on my Instagram @tntlzzz.';
}
