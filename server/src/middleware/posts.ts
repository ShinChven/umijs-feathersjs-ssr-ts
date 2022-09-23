import {Request, Response} from 'express';
import PostsController from './ssr/PostsController';

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      req.url = `/posts/${id}`;
      const data = await PostsController(req);
      res.json(data);
    } catch (e) {
      console.error(e);
    }
  };
}
