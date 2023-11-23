import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardToolbar } from '../../core/components/dashboard-toolbar/toolbar.component';
import { Button } from '../../core/components/button/button.component';
import { GridComponent } from '../../core/components/grid/grid.component';
import { InputComponent } from '../../core/components/input/input.component';

import { PostsService } from '../service';
import { PostCard } from '../utils/card/post-card.component';

@Component({
  standalone: true,
  templateUrl: './all-posts.template.html',
  styleUrls: ['./all-posts.style.scss'],
  imports: [
    CommonModule,
    RouterModule,
    DashboardToolbar,
    Button,
    PostCard,
    GridComponent,
    InputComponent,
  ],
  providers: [PostsService],
})
export class AllPostsRoute {
  postsService = inject(PostsService);

  posts$ = this.postsService.getAll();
}
