import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

type Sizing = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.template.html',
  styleUrl: './input.style.scss',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder?: string = '';
  @Input() id?: string = '';

  @Input() bordered?: boolean = false;

  /** Sizing options */
  @Input() size: Sizing = 'md';
  /** Sizing options */
  @Input() padding: Sizing = 'md';

  @Input() type: 'file' | 'text' = 'text';

  @Input('value') private _value: string | File | Blob = '';

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;

    this.onChange(this._value);
    this.onTouched();
  }

  writeValue(event: any): void {
    this.handleChange(event);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  private handleChange(event: any) {
    switch (this.type) {
      case 'file':
        return this.handleFileInputChange(event);
      case 'text':
        return this.handleTextInputChange(event);
    }
  }

  private handleTextInputChange(event: any) {
    if (event && event.target) {
      this.value = (event.target as any).value;
    }
  }

  private handleFileInputChange(event: any) {
    if (event && event.target) {
      console.log(event.target.files);
      this.value = event.target.files[0];
    }
  }

  get classes() {
    let classList = ``;

    if (this.bordered) classList += `bordered `;

    const sizeClass = `size-${this.size} `;
    const paddingClass = `padding-${this.padding} `;

    classList += sizeClass;
    classList += paddingClass;

    if (!!this._value) classList += `active `;

    return classList;
  }
}
