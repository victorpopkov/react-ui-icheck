import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron'; // eslint-disable-line sort-imports
import Skin from './Skin';

const SkinFuturico = () => (
  <main className="skin futurico" role="main">
    <Jumbotron />
    <Skin defaultColor="futurico" skin="futurico" title="Futurico skin" />
  </main>
);

export default hot(module)(SkinFuturico);
