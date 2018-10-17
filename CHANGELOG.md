# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

## [0.2.0][] - 2018-10-17

### Added

- Integration with "Code Climate" for code quality and test coverage reports
- Integration with "Codecov" for test coverage reports
- Integration with "Travis CI" for building and testing
- Missing props in the `RadioGroup.defaultProps`
- Tests for the `Input` and `Label` components (the total project test coverage: 47%)
- This `CHANGELOG.md`
- Website homepage badges

### Changed

- Dependencies versions to match the latest ones
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

[unreleased]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/victorpopkov/react-ui-icheck/compare/v0.1.0...v0.2.0
