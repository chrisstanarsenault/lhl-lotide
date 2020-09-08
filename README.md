# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @chrisarsenault/lotide`

**Require it:**

`const _ = require('@chrisarsenault/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters(string)`: returns how many times a letter is in a string.

```js
// countLetters ex:
countLetters("hello"); // => {h:1, e:1, l:2, o:1}
```

- `countOnly(allItems, itemsToCount)`: returns how many times items `(itemsToCount)` appear in a list `(allItems)`.

```js
// countOnly ex:
countOnly(
  [
    "Jim",
    "Pam",
    "Michael",
    "Pam",
    "Dwight",
    "Kevin",
    "Angela",
    "Oscar",
    "Angela",
  ],
  {
    Jim: true,
    Pam: true,
    Angel: true,
    Oscar: true,
  }
); // => {"Jim": 1, "Pam": 2, "Angela": 2, "Oscar": 1}
```

- `findKey(object, callback)`: given an object with values containing another object, using a callback, it will return the first key matching the callback.

```js
// findKey ex:
findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
```

- `findKeyByValue(object, value)`: returns the key of an object matching value arg

```js
// findKeyByValue ex:
findKeyByValue(
  {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  },
  "The Wire"
); // => "drama"
```

- `flatten(object, value)`: given an array with nested arrays no more than 1 level deep, will return simple none nested array with all values in it.

```js
// flatten ex:
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
```

- `head(arr)`: returns the first item in an array.

```js
// head ex:
head([1, 2, 3, 4]); // => 1
```

- `letterPositions(sentence)`: given a sentence, and the letter you want the indexes of, it will return an array with the indexes of that letter.

```js
// letterPositions ex:
letterPositions("hello").l; // => [2, 3]
```

- `map(arr)`: iterates over an passed array and returns a new array with values based of a passed callback.

```js
// map ex:
map(["ground", "control", "to", "major", "tom"], (word) => word[0]); // => ["g", "c", "t", "m" "t"]
```

- `middle(arr)`: returns an array of the middle value of an array. If even numbered array, will return the middle 2 values of that array.

```js
// middle ex:
middle([1, 2, 3, 4]); // => [2, 3]
```

- `tail(arr)`: returns an array with every value after the first item in that array.

```js
// tail ex:
tail([1, 2, 3, 4]); // => [2, 3, 4]
```

- `takeUntil(array, callback)`: returns an array with every value until callback is met.

```js
// takeUntil ex:
takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => x < 0); // => [1, 2, 5, 7, 2]
```

- `without(source, itemsToRemove)`: given an array of items, and an array of items you want removed, returns a new array with remaining items.

```js
// without ex:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
```
