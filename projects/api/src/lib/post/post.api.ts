import { Injectable, inject } from '@angular/core';
import { IPost } from './post.interface';
import { AbstractApi } from '../core/abstract-api.service';
import { Paginated } from '../core/utils/paginated.type';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostApi extends AbstractApi {
  protected override http: HttpClient = inject(HttpClient);
  protected override apiUrl: string =
    AbstractApi.BASE_URL + '/api/collections/posts/records';

  getPosts(
    page: number = 1,
    perPage: number = 15,
  ): Observable<Paginated<IPost>> {
    return this.http.get<Paginated<IPost>>(
      this.apiUrl + this.makeQueryParams({ page, perPage }),
    );
  }

  getPostById(postId: string) {
    return this.http.get<IPost>(this.apiUrl + `/${postId}`);
  }
}
