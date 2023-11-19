import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from '../button/button.component';
import { ETheme, ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

type NavItem = {
  id: number;
  text: string;
  iconName: string;
  link: string;
};

type NavAction = {
  id: number;
  text?: string;
  iconName?: string;
  click: () => void;
};

@Component({
  standalone: true,
  imports: [Button, CommonModule],
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrl: './header.styles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ThemeService],
})
export class Header {
  constructor(private themeService: ThemeService) {}

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

  public get navActions(): NavAction[] {
    return [
      /** THEME TOGGLE */
      {
        id: 1,
        iconName:
          this.themeService.theme === ETheme.LIGHT ? 'light_mode' : 'dark_mode',
        click: () => this.themeService.toggleTheme(),
      },
      /** Logout */
      {
        id: 2,
        text: 'Logout',
        iconName: 'logout',
        click: () => {},
      },
    ];
  }
}
