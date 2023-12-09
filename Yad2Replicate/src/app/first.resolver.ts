import { ResolveFn } from '@angular/router';

export const firstResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
