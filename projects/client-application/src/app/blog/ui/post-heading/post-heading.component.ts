import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../shared/components/button/button.component';

@Component({
  selector: 'blog-post-heading',
  imports: [CommonModule, RouterLink, Button],
  standalone: true,
  templateUrl: './post-heading.component.html',
  styleUrl: './post-heading.component.scss',
})
export class PostHeadingComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) postedAt!: string;

  public goBackUrl = '/blog/posts';
}
