import { Component, Injectable } from '@angular/core';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    try {
      this.theme = (localStorage.getItem('theme') as ETheme) || ETheme.LIGHT;
    } catch (e) {
      // console.log(e);
    }
  }

  private _theme!: ETheme;

  private set theme(value: ETheme) {
    try {
      localStorage.setItem('theme', value);
      document.body.classList.remove(this.theme);
      document.body.classList.add(value);
      this._theme = value;
    } catch (e) {
      // console.log(e);
    }
  }

  public get theme() {
    return this._theme;
  }

  public toggleTheme() {
    if (this.theme === ETheme.LIGHT) this.theme = ETheme.DARK;
    else this.theme = ETheme.LIGHT;
  }
}
