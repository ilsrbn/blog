import { Injectable } from '@angular/core';
import { PocketbaseService } from '../core/pocket-base.service';
import { ICreatePost, IPost } from './post.interface';
import { makeFileUrl } from '../core/utils/make-file-url';

@Injectable({
  providedIn: 'root',
})
export class PostApi {
  constructor(private pbService: PocketbaseService) {}

  async getPosts(page: number = 1, perPage: number = 15) {
    const response = await this.pbService
      .collection('posts')
      .getList<IPost>(page, perPage);
    response.items = response.items.map((post) => {
      const { collectionId, id, preview } = post;

      return {
        ...post,
        preview: makeFileUrl(collectionId, id, preview),
      };
    });

    return response;
  }

  createPost(payload: ICreatePost) {
    const formData = new FormData();

    for (const key in payload) {
      formData.append(key, (payload as any)[key]);
    }

    return this.pbService.collection('posts').create<IPost>(formData);
  }
}
