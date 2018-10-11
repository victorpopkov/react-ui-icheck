const packageJson = require('../../package.json');

const removeTrailingSlash = s => s.replace(/\/$/, '');

// Environment variables
const appHost = process.env.APP_HOST || '0.0.0.0';
const appPort = Number.parseInt(process.env.APP_PORT, 10) || 3000;
const appPublicPath = process.env.APP_PUBLIC_PATH ? `${removeTrailingSlash(process.env.APP_PUBLIC_PATH)}/` : '/';

module.exports = {
  package: {
    description: packageJson.description,
    homepage: packageJson.homepage,
    name: packageJson.name,
    repository: 'https://github.com/victorpopkov/react-ui-icheck',
    version: packageJson.version,
  },
  appHost,
  appPort,
  appPublicPath,
};
