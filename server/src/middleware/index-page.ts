import {NextFunction, Request, Response} from 'express';
import IndexPageController from './ssr/IndexPageController';

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = await IndexPageController(req);
    res.json(data);
  };
}
