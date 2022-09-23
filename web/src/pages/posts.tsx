import React, {useEffect, useState} from 'react';
import {SSRComponent, WithSSRData} from '@/types';
import {makeUrl} from '@/client';
import {Link} from 'umi';

type PostModel = {
  id: number;
  title: string;
  content: string;
}

const Post: React.FC<WithSSRData<{ post: PostModel }>> & SSRComponent = ({data}) => {
  const [post, setPost] = useState(data?.post); // initiate with SSR data

  useEffect(() => {
    // Fetch data over api if SSR data is not given.
    // In most case, this page may have been loaded by client router

    if (!post) {
      (async () => {
        const id = window.location.pathname.split('/').pop();
        const resp = await fetch(makeUrl(`/api/posts/${id}`));
        const data = await resp.json();
        setPost(data?.post);
      })()
    }

  }, [0]);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>

      <Link to={'/'}>go home</Link>
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
