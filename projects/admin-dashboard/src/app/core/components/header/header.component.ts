import { Component } from '@angular/core';
import { Button } from '../button/button.component';

type NavItem = {
  id: number;
  text: string;
  iconName: string;
  link: string;
};

type NavAction = NavItem;

@Component({
  standalone: true,
  imports: [Button],
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrl: './header.styles.scss',
})
export class Header {
  public navItems: NavItem[] = [
    {
      id: 1,
      iconName: 'article',
      text: 'Posts',
      link: '/dashboard/posts',
    },
    {
      id: 2,
      iconName: 'pages',
      text: 'Pages',
      link: '/dashboard/pages',
    },
  ];

  public navActions: NavAction[] = [
    {
      id: 1,
      text: 'Logout',
      link: '/logout',
      iconName: 'logout',
    },
  ];
}
