import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BlogService } from '../../data-access/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkPipe } from '../../utils/router-link.pipe';
import { ImageLinkPipe } from '../../../shared/pipes/image-link.pipe';
import { PostPreviewComponent } from '../../ui/post-preview/post-preview.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkPipe,
    ImageLinkPipe,
    PostPreviewComponent,
  ],
  providers: [BlogService],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllBlogPosts {
  blogService = inject(BlogService);
  title = 'client-application';

  posts$ = this.blogService.getAllPosts();
}
