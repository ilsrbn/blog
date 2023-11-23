import { Component } from '@angular/core';
import { PostForm } from '../utils/form/post-form.component';

@Component({
  standalone: true,
  imports: [PostForm],
  templateUrl: './create-post.template.html',
  styleUrl: './create-post.style.scss',
})
export class CreatePostRoute {
  onSubmit(event: any) {
    console.log({ event });
  }
}
