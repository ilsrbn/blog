import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'post-card',
  template: ` <a class="card" [routerLink]="link">
    <div class="card__section-left">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="card__section-footer">
        <small>{{ status }}</small>
        <small>{{ date | date }}</small>
      </div>
    </div>
    <div class="card__section-right">
      <img [src]="image" [alt]="title" />
    </div>
  </a>`,
  styles: `
  a {
    text-decoration: none;
  }
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--padding-small);
    padding: var(--padding-small);
    border: 1px solid var(--color-primary);
  
    p {
      margin-block: var(--padding-small);
    }
    img {
      object-fit: cover;
      height: 100%;
      border: 1px solid var(--color-primary);
    }
  
    &__section-footer {
      margin-top: calc(var(--padding-medium) * 2);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    cursor: pointer;
  
    background: var(--color-bg);
  
    transition: background var(--animation-default);
  
    &:hover {
      background: var(--color-semi-bg);
    }
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
})
export class PostCard {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) status!: string;
  @Input({ required: true }) image!: string;

  @Input({ required: true }) domain!: string;

  get link() {
    return `/dashboard/${this.domain}/${this.id}`;
  }
}
