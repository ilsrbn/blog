import { Component } from '@angular/core';
import { PostForm } from '../utils/form/post-form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PostsService } from '../service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [PostForm, CommonModule, RouterModule],
  templateUrl: './edit-post.template.html',
  styleUrl: './edit-post.style.scss',
})
export class EditPostRoute {
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private sanitizer: DomSanitizer,
  ) {}

  post$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      return this.postsService.getOne(id!);
    }),
    map((post) => {
      post.content = this.sanitizer.bypassSecurityTrustHtml(
        post.content,
      ) as string;
      return post;
    }),
  );
}
