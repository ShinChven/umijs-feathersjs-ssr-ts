import {NextFunction, Request, Response} from 'express';
import {pathToRegexp} from 'path-to-regexp';
import render from './render';
import IndexPageController from './IndexPageController';
import PostsController from './PostsController';

type SSRController<T> = (req: Request) => Promise<T>;

const SSRControllers: {
  [key: string]: SSRController<any>
} = {
  '/': IndexPageController,
  '/posts/:id': PostsController,
};

/**
 * Find Server Side Rendering data controller
 * @param pathname request url
 */
const getSSRController = (pathname: string): { route?: string, controller?: SSRController<any> } => {
  const routes = Object.keys(SSRControllers);
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const regexp = pathToRegexp(route);
    if (regexp.test(pathname)) {
      return {
        route,
        controller: SSRControllers[route]
      };
    }
  }
  return {};
};

export default () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const pathname = req.url.split('?')[0];
    const {route, controller} = getSSRController(pathname);

    if (route === undefined || controller === undefined) {
      next();
      return;
    }

    try {
      const data = await controller(req) || {};

      const context = {};
      const {
        html,
        error,
        rootContainer,
      } = await render({
        // path to find page templates
        path: req.url,
        context,
        // customize html template
        // htmlTemplate: defaultHtml,
        // rendering mode: 'stream' | 'string', default is 'stream'. It is recommended to use 'string' to solve helmet issue.
        mode: 'string',
        // generate html fragments for static site
        // staticMarkup: false,
        // Pass your Server Side Rendering data to component, please handle them in getInitialProps.
        getInitialPropsCtx: {data},
        // manifest，// normally you don't need to pass this
      });

      if (error || rootContainer === '') {
        console.error(error);
        return next();
      } else {
        res.setHeader('Content-Type', 'text/html');
        return res.send(html);
      }
    } catch (e) { // handle unexpected error
      console.error(e);
    }
    next();
  };
};
