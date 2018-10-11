import React from 'react';
import { hot } from 'react-hot-loader';
import Skin from './Skin'; // eslint-disable-line sort-imports

const SkinSquare = () => (
  <div className="skin square">
    <Skin skin="square" title="Square skin" colorSchemes />
  </div>
);

export default hot(module)(SkinSquare);
