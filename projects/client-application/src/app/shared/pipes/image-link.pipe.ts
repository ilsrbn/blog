import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'imageLink',
})
export class ImageLinkPipe implements PipeTransform {
  transform(value: string | number, collectionId: string, entityId: string) {
    return `http://127.0.0.1:8090/api/files/${collectionId}/${entityId}/${value}`;
  }
}
