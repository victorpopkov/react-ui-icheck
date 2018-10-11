import React from 'react';
import { hot } from 'react-hot-loader';
import Skin from './Skin'; // eslint-disable-line sort-imports

const SkinPolaris = () => (
  <div className="skin polaris">
    <Skin skin="polaris" title="Polaris skin" />
  </div>
);

export default hot(module)(SkinPolaris);
