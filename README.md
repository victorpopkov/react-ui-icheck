# react-ui-icheck

[![npm](https://img.shields.io/npm/v/react-ui-icheck.svg)](https://www.npmjs.com/package/react-ui-icheck)
[![David](https://img.shields.io/david/victorpopkov/react-ui-icheck)](https://david-dm.org/victorpopkov/react-ui-icheck)
[![David Dev](https://img.shields.io/david/dev/victorpopkov/react-ui-icheck)](https://david-dm.org/victorpopkov/react-ui-icheck?type=dev)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/victorpopkov/react-ui-icheck/CI)](https://github.com/victorpopkov/react-ui-icheck/actions)
[![Codecov](https://img.shields.io/codecov/c/github/victorpopkov/react-ui-icheck.svg)](https://codecov.io/gh/victorpopkov/react-ui-icheck)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/victorpopkov/react-ui-icheck.svg)](https://codeclimate.com/github/victorpopkov/react-ui-icheck)

iCheck customizable checkboxes and radios built with React.

- [Overview](#overview)
- [Demo](#demo)
- [Installation](#installation)

## Overview

This library has been originally intended to be a fork of the [react-icheck][]
created by [luqin][] which didn't seem to be maintained anymore. However, after
diving into the original code it became more convenient to create a new one as a
drop-in replacement with some additional features.

### Differences

Below you can find the list of the main differences from the original
[react-icheck][] library:

- Refactored and improved the existing codebase:

  - Added `onBlur` and `onFocus` label events to accompany `onMouseOut` and `onMouseOver`
  - Moved all corresponding properties from the `EnchantedSwitch` to both `Checkbox` and `Radio` components and removed unused ones
  - Removed `EnchantedSwitch` in favour of `Input` and `Label` components
  - Removed `refs` usage to follow the "[Don’t Overuse Refs](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)" guide

- Introduced `CheckboxGroup` similar to the `RadioGroup`

- Introduced `checkboxWrapClassName` and `checkboxWrapTag` properties for `RadioGroup` to control the wrapping behaviour of the radio elements

- Introduced `labelTag` and `labelTagClassName` properties for both `Checkbox` and `Radio` components to control the rendering of the label content

- Labels for `Checkbox` and `Radio` can be passed as children alongside with the original label property

## Demo

The demo can be found on the [website][] alongside with the source
[here](https://github.com/victorpopkov/react-ui-icheck-website).

## Installation

The library can be installed like any other [npm][] package.

If you are planning to use your custom skin(s):

```bash
$ npm install react-ui-icheck --save
# or
$ yarn add react-ui-icheck
```

However, if you are planning to use [iCheck][] skin(s) you will need to install
the `icheck` package as well:

```bash
$ npm install react-ui-icheck icheck --save
# or
$ yarn add react-ui-icheck icheck
```

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

[icheck]: https://github.com/fronteed/icheck
[luqin]: https://github.com/luqin
[npm]: https://www.npmjs.com/
[react-icheck]: https://github.com/luqin/react-icheck
[website]: http://github.victorpopkov.com/react-ui-icheck/
