import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-grid',
  template: `
    <section>
      <ng-content></ng-content>
    </section>
  `,
  styles: `
  section {
   display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--padding-medium);
    @media screen and (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class GridComponent {}
