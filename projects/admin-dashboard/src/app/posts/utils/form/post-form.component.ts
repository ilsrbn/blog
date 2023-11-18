import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ICreatePost } from '../../../../../../api/src/public-api';

@Component({
  standalone: true,
  selector: 'post-form',
  templateUrl: './post-form.template.html',
  styleUrl: './post-form.style.scss',
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostForm {
  @Input() title?: string = '';
  @Input() description?: string = '';
  @Input() briefDescription?: string = '';
  @Input() image?: File | Blob;
  @Input() status?: 'draft' | 'published' = 'draft';
  @Input() slug?: string = '';

  @Output() eventEmiter: EventEmitter<ICreatePost> = new EventEmitter();

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    briefDescription: new FormControl('', Validators.required),
    status: new FormControl('draft', Validators.required),
    image: new FormControl(),
    slug: new FormControl('', Validators.required),
  });

  submit() {
    const formValue = this.formGroup.getRawValue();
    const payload: ICreatePost = {
      title: formValue.title || '',
      content: formValue.description || '',
      content_preview: formValue.briefDescription || '',
      preview: formValue.image,
      slug: formValue.slug || '',
      status: formValue.slug || ('draft' as any),
    };
    this.eventEmiter.emit(payload);
  }
}
