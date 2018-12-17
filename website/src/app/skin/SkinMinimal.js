import React from 'react';
import { hot } from 'react-hot-loader';
import Jumbotron from '../common/jumbotron/Jumbotron'; // eslint-disable-line sort-imports
import Skin from './Skin';

const SkinMinimal = () => (
  <main className="skin minimal" role="main">
    <Jumbotron />
    <Skin defaultColor="minimal" skin="minimal" title="Minimal skin" colorSchemes />
  </main>
);

export default hot(module)(SkinMinimal);
