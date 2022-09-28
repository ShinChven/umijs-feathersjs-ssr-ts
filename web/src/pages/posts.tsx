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
  // Initiate Page Data:
  // If the page is rendered from server side, the state will be initiated with SSR data
  // If the page is rendered from client side, the state will be initiated as undefined, you may fetch data from API in useEffect hook.
  // By doing this, no matter the page is rendered from server side or client side, the component refers to the same state.
  const [post, setPost] = useState(data?.post);
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
  }, [0]); // run only once

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>

      <Link to={'/'}>go home</Link>
    </div>
  )
}


/**
 * Bind SSR data to component
 * @param ctx - Context object from server side rendering that carries initial data.
 * I suggest you keep this function as it is, and handle data in component, for this function is only called in server side.
 */
Post.getInitialProps = async (ctx) => {
  return Promise.resolve({
    data: ctx.data,
  })
};

export default Post;
