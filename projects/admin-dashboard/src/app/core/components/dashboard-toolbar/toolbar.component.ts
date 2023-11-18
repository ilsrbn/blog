import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'dashboard-toolbar',
  templateUrl: './toolbar.template.html',
  styleUrl: './toolbar.style.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardToolbar {}
