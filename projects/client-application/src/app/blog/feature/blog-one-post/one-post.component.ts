import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../data-access/blog.service';
import { RouterLinkPipe } from '../../utils/router-link.pipe';
import { switchMap } from 'rxjs';
import { ImageLinkPipe } from '../../../shared/pipes/image-link.pipe';
import { PostHeadingComponent } from '../../ui/post-heading/post-heading.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DisableSanitizePipe } from '../../../shared/pipes/disable-sanitize.pipe';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkPipe,
    ImageLinkPipe,
    DisableSanitizePipe,
    PostHeadingComponent,
  ],
  providers: [BlogService],
  templateUrl: './one-post.component.html',
  styles: `
  .post-content {
    position: static;

    & > h2, h3, h4, h5 {
      border-left: 2px solid var(--color-primary);
      padding-left: var(--padding-medium);
    }

  }`,
})
export class OneBlogPost {
  private blogService = inject(BlogService);

  route = inject(ActivatedRoute);

  post$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id') as string;
      return this.blogService.getPostById(id);
    }),
  );
}
