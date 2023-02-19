# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Bump dependencies

### Removed

- Remove deprecated properties

## [0.8.1] - 2021-09-15

### Added

- **[maintenance]** Add `audit:fix` script in `package.json`

### Changed

- Bump dependencies

### Removed

- Remove [Node.js] v10 and v13 support

## [0.8.0] - 2021-04-12

### Added

- **[maintenance]** Add `deduplicate` script in `package.json`

### Changed

- **[maintenance]** Change [GitHub Actions] CI build, lint and test jobs configurations
- Bump [React] from v16 to v17
- Bump dependencies

## [0.7.0] - 2020-06-23

### Added

- **[maintenance]** Add [GitHub Actions] for CI build, lint and test
- **[maintenance]** Add [Prettier] integration
- **[maintenance]** Add `react/jsx-props-no-spreading` [ESLint] rule exceptions
- Add ESNext source code in `npm` package

### Changed

- **[maintenance]** Change [ESLint] configs to work with [Prettier] and simplify them
- Bump dependencies
- Refactor tests
- Replace `JS` extension with `JSX` where appropriate
- Replace deprecated `componentWillReceiveProps` with `getDerivedStateFromProps`

### Deprecated

- Deprecate `Checkbox` and `Radio` prop `defaultChecked` in favour of `checked`

### Removed

- **[maintenance]** Remove unnecessary root `.npmignore`
- **[maintenance]** Replace [remark] with [Prettier]
- **[maintenance]** Replace [Travis CI] with [GitHub Actions]
- **[website]** Remove obsolete website-related `dotenv` leftovers
- Remove [Node.js] v8 and v11 support
- Remove `better-npm-run` in favour of `cross-env`
- Remove invalid argument in `React.Children.map` usages
- Remove resolutions in `package.json`

### Fixed

- **[maintenance]** Fix [ESLint] code linting issues
- **[maintenance]** Fix [Prettier] code formatting issues
- Fix `defaultChecked` prop behaviour in `Checkbox` and `Radio`

## [0.6.0] - 2019-07-15

### Added

- **[maintenance]** Add [Code Climate] config
- Add `BaseInput` to be extended by `Checkbox` and `Radio`

### Changed

- Bump dependencies
- Change [Jest] config to ignore `src/index.js`

### Removed

- **[website]** Remove website in favour of [react-ui-icheck-website]
- **[website]** Remove website-related dependencies and scripts
- Remove unused [Babel] plugins
- Remove unused prop `isMobile` in `Radio`

### Fixed

- **[maintenance]** Fix author email in `package.json`
- Fix missing dependencies

## [0.5.0] - 2019-04-22

### Added

- **[website]** Add website 404 error page vertical centering

### Changed

- **[website]** Add website `Checkbox` and `Radio` examples
- **[website]** Add website `clean-webpack-plugin` webpack production config
- Bump dependencies

### Deprecated

- Deprecate `Checkbox` and `Radio` prop `activeClass` in favour of `activeClassName`
- Deprecate `Checkbox` and `Radio` prop `checkedClass` in favour of `checkedClassName`
- Deprecate `Checkbox` and `Radio` prop `disabledClass` in favour of `disabledClassName`
- Deprecate `Checkbox` and `Radio` prop `focusClass` in favour of `focusClassName`
- Deprecate `Checkbox` and `Radio` prop `hoverClass` in favour of `hoverClassName`
- Deprecate `Checkbox` and `Radio` prop `indeterminateClass` in favour of `indeterminateClassName`
- Deprecate `Checkbox` and `Radio` prop `inheritClass` in favour of `inheritClassName`
- Deprecate `Checkbox` prop `checkboxClass` in favour of `checkboxClassName`
- Deprecate `Radio` prop `radioClass` in favour of `radioClassName`

### Removed

- Remove unused `determinateClass` prop for `Checkbox` and `Radio`

### Fixed

- Fix `inheritClass` prop type for `Checkbox` and `Radio`

## [0.4.0] - 2019-01-30

### Added

- **[website]** Add website "Properties" blocks in `Checkbox` and `Radio` demos
- Add `deprecated` helper for wrapping the deprecated `PropTypes` in the future releases
- Add missing `Checkbox` and `Radio` properties to match the ones used in `Input` component

### Changed

- Bump dependencies

### Removed

- **[website]** Remove website `<main />` content vertical alignment
- Remove [Node.js] v9 support

### Fixed

- **[maintenance]** Fix `lint:stylelint` script paths in `package.json`
- **[website]** Fix website `class` attributes in `Checkbox` and `Radio` demos
- **[website]** Fix website imports alongside

## [0.3.0] - 2018-12-09

### Added

- **[maintenance]** Add [Travis CI] for code linting
- Add `Checkbox`, `CheckboxGroup`, `Radio` and `RadioGroup` components tests (the total project test coverage: 100%)

### Changed

- **[maintenance]** Disable `no-duplicate-headings` for [remark-lint]
- **[website]** Enable `css-loader` global modules in the website webpack configs
- Bump dependencies

### Fixed

- **[website]** Fix website imports to use `react-ui-icheck` instead of `react-icheck`
- Fix `@babel/plugin-proposal-decorators` plugin order in [Babel] configs

## [0.2.0] - 2018-10-17

### Added

- **[maintenance]** Add [Code Climate] for code quality and test coverage reports
- **[maintenance]** Add [Codecov] for test coverage reports
- **[maintenance]** Add [Travis CI] for building and testing
- **[website]** Add website homepage badges
- Add `Input` and `Label` components tests (the total project test coverage: 47%)
- Add missing props in `RadioGroup.defaultProps`
- Add this `CHANGELOG.md`

### Changed

- **[maintenance]** Resort properties in `.eslintrc` and `.remarkrc`
- **[website]** Change website page headings
- Bump dependencies
- Change [Node.js] engine requirement from `>= 10.0.0` to `>= 8.10.0`

### Removed

- **[website]** Remove `.env` requirement for website building/running
- Remove description comments from `RadioGroup.propTypes`

### Fixed

- **[maintenance]** Fix missing `remark` dependencies
- **[website]** Fix `lint:stylelint` script paths in `package.json`
- Fix input element mobile support in `Input` component

## 0.1.0 - 2018-10-12

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.8.1...HEAD
[0.8.1]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.1.0...v0.2.0
[babel]: https://babeljs.io/
[code climate]: https://codeclimate.com/
[codecov]: https://about.codecov.io/
[eslint]: https://eslint.org/
[github actions]: https://github.com/features/actions
[jest]: https://jestjs.io/
[node.js]: https://nodejs.org/
[prettier]: https://prettier.io/
[react-ui-icheck-website]: https://github.com/victorpopkov/react-ui-icheck-website
[react]: https://reactjs.org/
[remark-lint]: https://github.com/remarkjs/remark-lint
[remark]: https://remark.js.org/
[travis ci]: https://travis-ci.org/
