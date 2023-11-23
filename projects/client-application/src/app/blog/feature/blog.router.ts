import { Routes } from '@angular/router';

const blogRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./blog-all-posts/all-posts.component').then(
        (c) => c.AllBlogPosts,
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./blog-one-post/one-post.component').then((c) => c.OneBlogPost),
  },
];

export default blogRoutes;
