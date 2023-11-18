import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header.component';

@Component({
  selector: 'admin-layout',
  imports: [CommonModule, RouterOutlet, Header],
  standalone: true,
  template: `
    <app-header></app-header>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  styles: `
  section {
    padding: var(--padding-medium);
  }
  `,
})
export class AdminLayout {}
