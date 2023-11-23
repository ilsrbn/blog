import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Postapi } from 'api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), Postapi],
};
