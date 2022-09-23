import {Request} from 'express';

const IndexPageController = async (req: Request) => {
  return {
    page: {
      title: 'This is an Index Page from SSR Controller',
      description: 'This is an full stack TypeScript example of doing server side rendering with React/Umijs and FeathersJS.',
    }
  };
}

export default IndexPageController;
