import {Request} from 'express';
import {pathToRegexp} from 'path-to-regexp';

type PostModel = {
  id: number;
  title: string;
  content: string;
}

const Posts: Record<string, PostModel> = {
  '1': {
    id: 1,
    title: 'post 1', content: 'post 1 content'
  },
  '2': {
    id: 2,
    title: 'post 2', content: 'post 2 content'
  },
};


const PostsController = async (req: Request) => {
  const regexp = pathToRegexp('/posts/:id');
  const regexpResults = regexp.exec(req.url);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const id = regexpResults[1];
  return {post: Posts[id]};
};

export default PostsController;

