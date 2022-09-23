import {Application} from '../declarations';
import ssr from './ssr';
// Don't remove this comment. It's needed to format import lines nicely.

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
export default function (app: Application): void {

  // Mount Server Side Rendering middleware to the app
  app.use('/', ssr());
}
