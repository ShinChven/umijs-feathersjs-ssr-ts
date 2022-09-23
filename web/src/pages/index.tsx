import styles from './index.less';
import React, {useEffect, useState} from 'react';
import {SSRComponent, WithSSRData} from '@/types';
import {makeUrl} from '@/client';
import {Link} from 'umi';

type IndexSSRData = {
  title: string;
  description: string;
}

const IndexPage: React.FC<WithSSRData<{ page?: IndexSSRData }>> & SSRComponent = ({data}) => {

  const [page, setPage] = useState(data?.page);

  useEffect(() => {
    (async () => {
      if (page === undefined) {
        const resp = await fetch(makeUrl('/api/index-page'));
        const data = await resp.json();
        setPage(data?.page);
      }
    })()
  }, [0]);


  return (
    <div>
      <h1 className={styles.title}>{page?.title}</h1>
      <p className={styles.title}>{page?.title}</p>

      <Link to={'/posts/1'}> post 1 </Link>
      <Link to={'/posts/2'}> post 2 </Link>

    </div>
  );
}

/**
 * Process and bind data from server side render
 * @param ctx
 */
IndexPage.getInitialProps = async (ctx) => {
  return Promise.resolve({
    data: ctx.data,
  })
};

export default IndexPage;
