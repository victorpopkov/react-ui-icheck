import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron'; // eslint-disable-line sort-imports
import Skin from './Skin';

const SkinPolaris = () => (
  <main className="skin polaris" role="main">
    <Jumbotron />
    <Skin skin="polaris" title="Polaris skin" />
  </main>
);

export default hot(module)(SkinPolaris);
