import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron'; // eslint-disable-line sort-imports
import Skin from './Skin';

const SkinFlat = () => (
  <main className="skin flat" role="main">
    <Jumbotron />
    <Skin defaultColor="flat" skin="flat" title="Flat skin" colorSchemes />
  </main>
);

export default hot(module)(SkinFlat);
