# More Array Methods!

Have you ever been fed up over the fact that arrays have way less methods than they probably should?

No?

Whatever. Point is, I put together a handly little module with a bunch of extra methods for arrays, made to shave precious seconds off your afternoon of coding and self loathing. Consider it DLC for JavaScript

## Setting things up
To use these methods, simply require `more-array-methods` at the top of your code and run it as a function

```
const makeArraysLessTerrible = require('more-array-methods');

makeArraysLessTerrible();
//congratulations! you just made arrays less terrible!
```

## Methods
Here are all the things that you can do with More Array Methods. Most methods are pretty basic and took like two minutes to code, but in the end it's still pretty helpful to have them all in one big module.

| Method | Description |
| --- | --- |
.insert(item, index) | Inserts something at the specified index. If index is left blank, it's pushed to the end of the array
.delete(index) | Deletes the item at the specified index, leaving nothing behind
.remove(match, strict) | Deletes the first item in the array to match the `match` parameter. Set `strict` to true to match with `===` instead of `==`
.purge(match, strict) | Same as remove(), but all matching items are removed rather than just one
.last() | Returns the last item in the array
.pick() | Returns a random item from the array
.shuffle() | Shuffles the array, completely randomly
.locate(function) | Identical to the built-in `.find()`, but it returns an object with both the found item and it's index. You're welcome.
.toLowerCase() | Converts all strings to lowercase
.toUpperCase() | Converts all strings to uppercase
.stringify() | Converts all numbers in the array to strings
.numerify() | Converts all strings in the array to numbers
.ascend() | Sorts all numbers from lowest to highest
.descend() | Sorts all numbers from highest to lowest
.unique() | Deletes all duplicate items in the array
.sum() | Returns the sum of all the numbers in the array
.average() | Returns the average of all the numbers in the array
.middle(ceil) | Returns the middle/median item in the array. If there's an even number of items, the number will be rounded down. Set `ceil` to true to round up instead
.most() | Returns the element that appears the most times in the array. If there are multiple, the first one is returned
.group() | Returns an object with the number of times each element appears in the array
.clean() | Deletes all null/undefined/empty/etc items
.h() | Changes all array elements to "h"

Hope this helps! <3
