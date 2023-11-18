import { Injectable } from '@angular/core';
import Pocketbase, { BaseAuthStore } from 'pocketbase';

export const HOST_URL = 'http://127.0.0.1:8090';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    return new Pocketbase(HOST_URL);
  },
})
export class PocketbaseService extends Pocketbase {}
