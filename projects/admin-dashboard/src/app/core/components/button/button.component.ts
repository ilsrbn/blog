import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

type ButtonSizing = 'sm' | 'md' | 'lg';
type Tags = 'button' | 'a';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.template.html',
  styleUrl: './button.style.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() tag: Tags = 'button';
  @Input() to?: string;
  @Input({ required: true }) text!: string;
  @Input() iconName?: string;
  @Input() bordered?: boolean = true;
  @Input() routeable?: boolean = false;

  @Input() size: ButtonSizing = 'md';
  @Input() padding: ButtonSizing = 'md';

  get classes() {
    const sizeClass = `size-${this.size}`;
    const paddingClass = `padding-${this.padding}`;

    let className = `${sizeClass} ${paddingClass}`;
    if (this.bordered) className += ' bordered';

    return className;
  }
}
