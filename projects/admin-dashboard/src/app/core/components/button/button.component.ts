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
  @Input() text?: string;
  /** Material design icon name */
  @Input() iconName?: string;
  @Input() bordered?: boolean = true;

  /** Navigation link */
  @Input() to?: string;
  /** Will Attach class `active` to `a` tag, when the route is active */
  @Input() routeable?: boolean = false;

  /** Render as `button` or as `a` */
  @Input() tag: Tags = 'button';

  /** Sizing options */
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
