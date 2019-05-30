# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

### Added

- `BaseInput` extended by `Checkbox` and `Radio` to avoid duplicated code

### Changed

- Dependencies to match the latest ones

### Removed

- Unused `Radio` prop `isMobile`

## [0.5.0][] - 2019-04-22

### Added

- Website 404 error page vertical centering

### Changed

- Dependencies to match the latest ones
- Website `Checkbox` and `Radio` examples
- Website `clean-webpack-plugin` webpack production config

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
- Website `Prism` code highlighting

## [0.4.0][] - 2019-01-30

### Added

- Helper `deprecated` for wrapping the deprecated `PropTypes` in the future
releases
- Missing `Checkbox` and `Radio` properties to match the ones used in the
`Input` component
- Website "Properties" blocks in the `Checkbox` and `Radio` demos

### Changed

- Dependencies to match the latest ones

### Removed

- Node.js v9 support
- Website `main` content vertical alignment

### Fixed

- Paths in the `lint:stylelint` script of the `package.json`
- Website `class` attributes in the "Rendered" tabs of the `Checkbox` and
`Radio` demos
- Website imports alongside the imports in the demos

## [0.3.0][] - 2018-12-09

### Added

- Code linting in the "Travis CI"
- Option `modules: 'global'` for the `css-loader` in the website webpack configs
- Tests for the `Checkbox`, `CheckboxGroup`, `Radio` and `RadioGroup` components
(the total project test coverage: 100%)

### Changed

- Dependencies to match the latest ones
- Rule `no-duplicate-headings` for remark-lint to become disabled

### Fixed

- Plugin `@babel/plugin-proposal-decorators` order in the Babel configs
- Website imports to use the `react-ui-icheck` instead of the `react-icheck`

## [0.2.0][] - 2018-10-17

### Added

- Integration with "Code Climate" for code quality and test coverage reports
- Integration with "Codecov" for test coverage reports
- Integration with "Travis CI" for building and testing
- Missing props in the `RadioGroup.defaultProps`
- Tests for the `Input` and `Label` components (the total project test coverage:
47%)
- This `CHANGELOG.md`
- Website homepage badges

### Changed

- Dependencies to match the latest ones
- Node engine requirement from `>= 10.0.0` to `>= 8.10.0`
- Properties sorting in `.eslintrc` and `.remarkrc`
- Website page headings

### Removed

- Description comments from `RadioGroup.propTypes`
- The requirement of the `.env` during website building and running

### Fixed

- Missing dependencies for the `remark` linting
- Mobile support for `Input` component input element
- Paths in the `lint:stylelint` script of the `package.json`

## 0.1.0 - 2018-10-12

First release.

[unreleased]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.1.0...v0.2.0
