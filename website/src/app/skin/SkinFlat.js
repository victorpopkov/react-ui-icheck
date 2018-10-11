import React from 'react';
import { hot } from 'react-hot-loader';
import Skin from './Skin'; // eslint-disable-line sort-imports

const SkinFlat = () => (
  <div className="skin flat">
    <Skin skin="flat" title="Flat skin" colorSchemes />
  </div>
);

export default hot(module)(SkinFlat);
