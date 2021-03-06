import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { lazy } from '@loadable/component';
// import Spinner from '../components/common/Spinner';

// const HomePage = lazy(() => import('../pages/HomePage'));
const PostListPage = lazy(() => import('../pages/PostListPage'));
const PostPage = lazy(() => import('../pages/PostPage'));
const CounterPage = lazy(() => import('../pages/CounterPage'));

export default () => (
  <>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Redirect path="/" exact to="/posts" />
        {/* <Route path="/home" component={HomePage} /> */}
        <Route path="/posts" exact component={PostListPage} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/counter" component={CounterPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </>
);
