const path = require('path');

const root = path.resolve(__dirname, '../../');
const dist = path.resolve(root, 'dist/');
const src = path.resolve(root, 'src/');
const websiteRoot = path.resolve(root, 'website/');
const websiteConfig = path.resolve(websiteRoot, 'config/');
const websiteDist = path.resolve(websiteRoot, 'dist/');
const websiteSrc = path.resolve(websiteRoot, 'src/');

module.exports = {
  dist,
  root,
  src,
  websiteConfig,
  websiteDist,
  websiteRoot,
  websiteSrc,
};
