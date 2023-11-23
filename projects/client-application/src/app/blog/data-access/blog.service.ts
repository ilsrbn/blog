import { Injectable } from '@angular/core';
import { PostApi } from 'api';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private postApi: PostApi) {}

  getAllPosts(page: number = 1, perPage: number = 15) {
    return this.postApi.getPosts(page, perPage);
  }

  getPostById(postId: string) {
    return this.postApi.getPostById(postId);
  }
}
