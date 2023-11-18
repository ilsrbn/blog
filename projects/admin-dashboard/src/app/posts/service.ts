import { Injectable } from '@angular/core';
import { ICreatePost, PostApi } from '../../../../api/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private postsApi: PostApi) {}
  getAll(page: number = 1, perPage: number = 15) {
    return this.postsApi.getPosts(page, perPage);
  }

  create(payload: ICreatePost) {
    return this.postsApi.createPost(payload);
  }
}
