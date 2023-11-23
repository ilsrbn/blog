import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog/posts',
    loadChildren: () =>
      import('./blog/feature/blog.router').then((r) => r.default),
  },
];
