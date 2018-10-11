import React from 'react';
import { hot } from 'react-hot-loader';
import Skin from './Skin'; // eslint-disable-line sort-imports

const SkinFuturico = () => (
  <div className="skin futurico">
    <Skin skin="futurico" title="Futurico skin" />
  </div>
);

export default hot(module)(SkinFuturico);
