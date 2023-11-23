import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../shared/components/button/button.component';
import { RouterLinkPipe } from '../../utils/router-link.pipe';
import { ImageLinkPipe } from '../../../shared/pipes/image-link.pipe';

@Component({
  imports: [CommonModule, RouterLink, Button, RouterLinkPipe, ImageLinkPipe],
  standalone: true,
  selector: 'blog-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPreviewComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) collectionId!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) briefDescription!: string;
  @Input({ required: true }) image!: string;
  @Input({ required: true }) postedAt!: string;

  get link() {
    return '/blog/posts/' + this.id;
  }
}
