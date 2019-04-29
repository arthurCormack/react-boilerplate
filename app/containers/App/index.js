/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';// for making of the global dynamic saga
import { compose } from 'redux';
import { DAEMON } from 'utils/constants';
import saga from './sagas';
const withSaga = injectSaga({ key: 'App', saga, mode: DAEMON });

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = ({route}) => {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default {
  component: compose(
    withSaga,
  )(App),
};