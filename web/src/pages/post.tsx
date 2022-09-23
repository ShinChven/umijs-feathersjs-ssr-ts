import React, {useEffect, useState} from 'react';
import {SSRComponent, WithSSRData} from '@/types';

type Post = {
  id: number;
  title: string;
  content: string;
}

const Post: React.FC<WithSSRData<{ post: Post }>> & SSRComponent = ({data}) => {
  const [post, setPost] = useState(data?.post); // initiate with SSR data

  useEffect(() => {
    // Fetch data over api if SSR data is not given.
    // In most case, this page may have been loaded by client router
    if (!post) {
      // todo fetch data over api if there is no SSR data
    }
  }, [0]);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  )
}


/**
 * Process and bind data from server side render
 * @param ctx
 */
Post.getInitialProps = async (ctx) => {
  return Promise.resolve({
    data: ctx.data,
  })
};

export default Post;
