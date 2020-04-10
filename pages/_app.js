import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../redux/store';
import PageLayout from '../PageLayout';


const App = ({ Component, pageProps, reduxStore }) => (
  <Provider store={reduxStore}>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </Provider>
);


export default withReduxStore(App);