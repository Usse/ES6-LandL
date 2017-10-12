/* eslint-disable */


// Named exports are used to export several values from a module.
export const PI = 3.14159265359

export function sum(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}


//  Default export is considered the "main" exported value since it will be the simplest to import
export default function timesTwo(a) {
  return a * 2
}
