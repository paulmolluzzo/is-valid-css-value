# is-valid-css-value [![Build Status](https://travis-ci.org/paulmolluzzo/is-valid-css-value.svg?branch=master)](https://travis-ci.org/paulmolluzzo/is-valid-css-value)

> Checks if a CSS property accepts a specific value

## Install

```
$ npm install --save is-valid-css-value
```

## Usage

```js
import {isValidProperty, isValidPropertyValue} from 'is-valid-css-value';

isValidProperty('z-index'); // true
isValidPropertyValue('border-left-style', 'dotted'); // true
isValidPropertyValue('border-left-style', 'purple'); // false
```

## License

MIT © [Paul Molluzzo](https://paul.molluzzo.com)
