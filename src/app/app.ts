import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = '';
  email = '';
  message = '';
  isOrbitMode = true;
  isDarkTheme = true;
  menuOpen = false;
  expOpen = [false, false, false];

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  toggleExp(i: number) {
    this.expOpen = this.expOpen.map((v, idx) => idx === i ? !v : v);
  }

  toggleSkillsView() {
    this.isOrbitMode = !this.isOrbitMode;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.classList.toggle('light-theme', !this.isDarkTheme);
  }

  sendMessage(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    const to = 'vanahallipradeep4@gmail.com';
    const subject = encodeURIComponent(`Portfolio Inquiry — Message from ${this.name}`);
    const body = encodeURIComponent(
      `Hi Pradeep,\n\nYou have a new message from your portfolio website.\n\nName: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`, '_blank');
  }
}
