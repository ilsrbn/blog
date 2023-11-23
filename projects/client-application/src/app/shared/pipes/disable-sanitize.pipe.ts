import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  standalone: true,
  name: 'disableSanitize',
})
export class DisableSanitizePipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
