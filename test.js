import test from 'ava';
import {isValidProperty, isValidPropertyValue} from '.';

test('Valid Property', t => {
  t.is(isValidProperty('z-index'), true);
});

test('Invalid Property', t => {
  t.is(isValidProperty('border-left-style-fake'), false);
});

test('Valid Property and Value', t => {
  t.is(isValidPropertyValue('border-left-style', 'dotted'), true);
});

test('Valid Property and Invalid Value', t => {
  t.is(isValidPropertyValue('border-left-style', 'purple'), false);
});
