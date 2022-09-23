import styles from './index.less';
import React, {useState} from 'react';
import {SSRComponent, WithSSRData} from '@/types';

type IndexSSRData = {
  title: string;
  description: string;
}

const IndexPage: React.FC<WithSSRData<{ page?: IndexSSRData }>> & SSRComponent = ({data}) => {

  const [page, setPage] = useState(data?.page);



  return (
    <div>
      <h1 className={styles.title}>{page?.title}</h1>
      <p className={styles.title}>{page?.title}</p>
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
