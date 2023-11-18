import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./core/layout/admin.layout').then((c) => c.AdminLayout),

    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/router').then((route) => route.router),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/router').then((route) => route.router),
      },
    ],
  },
];
