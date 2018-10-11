import React from 'react';
import { hot } from 'react-hot-loader';
import Skin from './Skin'; // eslint-disable-line sort-imports

const SkinMinimal = () => (
  <div className="skin minimal">
    <Skin skin="minimal" title="Minimal skin" colorSchemes />
  </div>
);

export default hot(module)(SkinMinimal);
