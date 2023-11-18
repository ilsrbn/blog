import { Route } from '@angular/router';

export const router: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./all/all-posts.route').then((c) => c.AllPostsRoute),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create-post.route').then((c) => c.CreatePostRoute),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./edit/edit-post.route').then((c) => c.EditPostRoute),
  },
];
