import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PostApi } from '../../../api/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PostApi],
};
