# react-ui-icheck

[![npm](https://img.shields.io/npm/v/react-ui-icheck.svg)](https://www.npmjs.com/package/react-ui-icheck)
[![David](https://img.shields.io/david/victorpopkov/react-ui-icheck.svg)](https://david-dm.org/victorpopkov/react-ui-icheck)
[![David](https://img.shields.io/david/dev/victorpopkov/react-ui-icheck.svg)](https://david-dm.org/victorpopkov/react-ui-icheck?type=dev)
[![Travis (.org)](https://img.shields.io/travis/victorpopkov/react-ui-icheck.svg)](https://travis-ci.org/victorpopkov/react-ui-icheck)
[![Codecov](https://img.shields.io/codecov/c/github/victorpopkov/react-ui-icheck.svg)](https://codecov.io/gh/victorpopkov/react-ui-icheck)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/victorpopkov/react-ui-icheck.svg)](https://codeclimate.com/github/victorpopkov/react-ui-icheck)

iCheck customizable checkboxes and radios built with React.

- [Getting Started](#getting-started)
  - [Overview](#overview)
  - [Demo](#demo)
  - [Installation](#installation)

## Getting Started

### Overview

This library was originally intended to be a fork of the [react-icheck][]
library created by [luqin](https://github.com/luqin) which doesn't seem to be
actively maintained any more *[at the moment of writing this, the last
[react-icheck][] release ([v0.3.6](https://github.com/luqin/react-icheck/releases/tag/v0.3.6))
was 2 years ago]*.

After diving into the original code it was more convenient to create a new
separate one as a drop-in replacement with some additional features.

Below you can find the list of the main differences from the original
[react-icheck][] library.

#### Differences

- Completely refactored and fixed/improved the existing code:
  - added `onBlur` and `onFocus` label events to accompany `onMouseOut` and
  `onMouseOver`
  - moved all corresponding properties from the `EnchantedSwitch` to both
  `Checkbox` and `Radio` components and removed unused ones
  - removed `EnchantedSwitch` in favour of `Input` and `Label` components
  - removed `refs` usage to follow the
  "[Don’t Overuse Refs](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs)"
  guide
- Introduced `CheckboxGroup` similar to the `RadioGroup`
- Introduced `checkboxWrapClassName` and `checkboxWrapTag` properties for
`RadioGroup` to control the wrapping behaviour of the radio elements.
- Introduced `labelTag` and `labelTagClassName` properties for both `Checkbox`
and `Radio` components to control the rendering of the label content.
- Labels for `Checkbox` and `Radio` can be passed as children alongside with the
original label property.

### Demo

Demo you can find on the [website][] alongside with the source
[here](https://github.com/victorpopkov/react-ui-icheck/tree/master/website).

### Installation

You can install this library as any other [npm](https://www.npmjs.com/) package.

If you are planning to use your own custom skin, then only the package of this
library is needed:

```bash
# using npm
npm install react-ui-icheck --save

# using Yarn
yarn add react-ui-icheck
```

If you are planning to use the original [iCheck][] skins, then you should
install both packages:

```bash
# using npm
npm install react-ui-icheck icheck --save

# using Yarn
yarn add react-ui-icheck icheck
```

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

[icheck]: https://github.com/fronteed/icheck
[react-icheck]: https://github.com/luqin/react-icheck
[website]: http://github.victorpopkov.com/react-ui-icheck/
