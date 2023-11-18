import { Route } from '@angular/router';

export const router: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./all/all-pages.route').then((c) => c.AllPagesRoute),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create-page.route').then((c) => c.CreatePageRoute),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./edit/edit-page.route').then((c) => c.EditPageRoute),
  },
];
