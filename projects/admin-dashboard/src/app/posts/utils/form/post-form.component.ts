import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ICreatePost } from 'api';
import { Button } from '../../../core/components/button/button.component';
import { InputComponent } from '../../../core/components/input/input.component';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'post-form',
  templateUrl: './post-form.template.html',
  styleUrl: './post-form.style.scss',
  imports: [ReactiveFormsModule, CommonModule, Button, InputComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostForm implements OnInit, OnDestroy {
  @Input() title?: string = '';
  @Input() description?: string = '';
  @Input() briefDescription?: string = '';
  @Input() image?: File | Blob;
  @Input() status?: 'draft' | 'published' = 'draft';
  @Input() slug?: string = '';

  @Output() onSubmit: EventEmitter<ICreatePost> = new EventEmitter();

  public submit(event: any) {
    event.preventDefault();
    const formValue = this.formGroup.getRawValue();
    const payload: ICreatePost = {
      title: formValue.title || '',
      content: formValue.description || '',
      content_preview: formValue.briefDescription || '',
      preview: formValue.image,
      slug: formValue.slug || '',
      status: formValue.status || ('draft' as any),
    };
    this.onSubmit.emit(payload);
  }

  ngOnInit(): void {
    this.formGroup.patchValue({
      title: this.title,
    });
  }

  public formGroup = new FormGroup({
    title: new FormControl(this.title, Validators.required),
    description: new FormControl('', Validators.required),
    briefDescription: new FormControl('', Validators.required),
    status: new FormControl('draft', Validators.required),
    image: new FormControl(),
    slug: new FormControl('', Validators.required),
  });

  public imageUrl: 'https://placehold.co/800x400?text=18x9' | string =
    'https://placehold.co/800x400?text=18x9';

  private imageSubscription$ = this.formGroup
    .get('image')
    ?.valueChanges.pipe(
      tap((value) => {
        if (value) {
          this.imageUrl = URL.createObjectURL(value);
        } else {
          this.imageUrl = 'https://placehold.co/800x400?text=18x9';
        }
      }),
    )
    .subscribe();

  ngOnDestroy(): void {
    this.imageSubscription$?.unsubscribe();
  }
}
