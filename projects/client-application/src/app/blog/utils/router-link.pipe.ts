import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'routerLink',
})
export class RouterLinkPipe implements PipeTransform {
  transform(value: string | number, ...args: any[]) {
    return `/blog/posts/${value}`;
  }
}
