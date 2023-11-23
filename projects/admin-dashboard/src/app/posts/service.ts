import { Injectable } from '@angular/core';
import { ICreatePost, PostApi } from 'api';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private postsapi: PostApi) {}
  getAll(page: number = 1, perPage: number = 15) {
    return this.postsapi.getPosts(page, perPage);
  }

  getOne(id: string) {
    return this.postsapi.getOne(id);
  }

  create(payload: ICreatePost) {
    return this.postsapi.createPost(payload);
  }
}
