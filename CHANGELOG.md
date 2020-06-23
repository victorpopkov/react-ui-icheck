# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

## [0.7.0][] - 2020-06-23

### Added

- **[maintenance]** Exceptions for the `react/jsx-props-no-spreading` ESLint rule
- **[maintenance]** Integration with "GitHub Actions" for CI build, lint and test
- **[maintenance]** Integration with Prettier
- ESNext source code in the `npm` package

### Changed

- **[maintenance]** Configurations for ESLint to work with Prettier and become simpler
- Dependencies to match the latest ones
- Deprecated `componentWillReceiveProps` to `getDerivedStateFromProps`
- Extension `JS` to `JSX` where appropriate
- Refactored tests

### Deprecated

- `Checkbox` and `Radio` prop `defaultChecked` in favour of `checked`

### Removed

- **[maintenance]** Integration with "Travis CI" in favour of "GitHub Actions"
- **[maintenance]** Integration with remark in favour of Prettier
- **[maintenance]** Unnecessary root `.npmignore`
- **[website]** Obsolete website-related dotenv leftovers
- Dependency `better-npm-run` in favour of `cross-env`
- Invalid argument in `React.Children.map` usages
- Node.js v8 and v11 support
- Resolutions in the `package.json`

### Fixed

- **[maintenance]** Some ESLint code linting issues
- **[maintenance]** Some Prettier code formatting issues
- Behaviour of the `defaultChecked` prop in the `Checkbox` and the `Radio`

## [0.6.0][] - 2019-07-15

### Added

- **[maintenance]** "Code Climate" config
- `BaseInput` extended by `Checkbox` and `Radio` to avoid duplicated code

### Changed

- Dependencies to match the latest ones
- Jest config to ignore `src/index.js`

### Removed

- **[website]** Website in favour of [react-ui-icheck-website](https://github.com/victorpopkov/react-ui-icheck-website)
- **[website]** Website-related dependencies and scripts
- Unused Babel plugins
- Unused `Radio` prop `isMobile`

### Fixed

- **[maintenance]** Author email in the `package.json`
- Some missing dependencies

## [0.5.0][] - 2019-04-22

### Added

- **[website]** Website 404 error page vertical centering

### Changed

- **[website]** Website `Checkbox` and `Radio` examples
- **[website]** Website `clean-webpack-plugin` webpack production config
- Dependencies to match the latest ones

### Deprecated

- `Checkbox` and `Radio` prop `activeClass` in favour of `activeClassName`
- `Checkbox` and `Radio` prop `checkedClass` in favour of `checkedClassName`
- `Checkbox` and `Radio` prop `disabledClass` in favour of `disabledClassName`
- `Checkbox` and `Radio` prop `focusClass` in favour of `focusClassName`
- `Checkbox` and `Radio` prop `hoverClass` in favour of `hoverClassName`
- `Checkbox` and `Radio` prop `indeterminateClass` in favour of `indeterminateClassName`
- `Checkbox` and `Radio` prop `inheritClass` in favour of `inheritClassName`
- `Checkbox` prop `checkboxClass` in favour of `checkboxClassName`
- `Radio` prop `radioClass` in favour of `radioClassName`

### Removed

- Unused `Checkbox` and `Radio` prop `determinateClass`

### Fixed

- `Checkbox` and `Radio` prop `inheritClass` type

## [0.4.0][] - 2019-01-30

### Added

- **[website]** Website "Properties" blocks in the `Checkbox` and the `Radio` demos
- Helper `deprecated` for wrapping the deprecated `PropTypes` in the future releases
- Missing `Checkbox` and `Radio` properties to match the ones used in the `Input` component

### Changed

- Dependencies to match the latest ones

### Removed

- **[website]** Website `main` content vertical alignment
- Node.js v9 support

### Fixed

- **[maintenance]** Paths in the `lint:stylelint` script of the `package.json`
- **[website]** Website `class` attributes in the "Rendered" tabs of the `Checkbox` and `Radio` demos
- **[website]** Website imports alongside the imports in the demos

## [0.3.0][] - 2018-12-09

### Added

- **[maintenance]** Code linting in the "Travis CI"
- **[website]** Option `modules: 'global'` for the `css-loader` in the website webpack configs
- Tests for the `Checkbox`, `CheckboxGroup`, `Radio` and `RadioGroup` components (the total project test coverage: 100%)

### Changed

- **[maintenance]** Rule `no-duplicate-headings` for remark-lint to become disabled
- Dependencies to match the latest ones

### Fixed

- **[website]** Website imports to use the `react-ui-icheck` instead of the `react-icheck`
- Plugin `@babel/plugin-proposal-decorators` order in the Babel configs

## [0.2.0][] - 2018-10-17

### Added

- **[maintenance]** Integration with "Code Climate" for code quality and test coverage reports
- **[maintenance]** Integration with "Codecov" for test coverage reports
- **[maintenance]** Integration with "Travis CI" for building and testing
- **[website]** Website homepage badges
- Missing props in the `RadioGroup.defaultProps`
- Tests for the `Input` and `Label` components (the total project test coverage: 47%)
- This `CHANGELOG.md`

### Changed

- **[maintenance]** Properties sorting in `.eslintrc` and `.remarkrc`
- **[website]** Website page headings
- Dependencies to match the latest ones
- Node engine requirement from `>= 10.0.0` to `>= 8.10.0`

### Removed

- **[website]** The requirement of the `.env` during website building and running
- Description comments from `RadioGroup.propTypes`

### Fixed

- **[maintenance]** Missing dependencies for the `remark` linting
- **[website]** Paths in the `lint:stylelint` script of the `package.json`
- Mobile support for `Input` component input element

## 0.1.0 - 2018-10-12

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.7.0...HEAD
[0.7.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.1.0...v0.2.0
