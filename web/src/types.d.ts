import {IGetInitialProps} from '@@/core/ssr/clientExports';

export type SSRComponent = {
  getInitialProps?: IGetInitialProps;
};

export type WithSSRData<T> = {
  data?: T;
}
