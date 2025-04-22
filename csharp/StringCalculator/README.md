# String Calculator Kata
This classic kata guides you step by step through the implementation of a calculator that receives a String as input.

## Features

### Adding Up to Two Numbers

#### Empty String
When the calculator is given an empty string, return 0.

#### Return Single Number as a Number
When the calculator is given a string with a single number, return that number as a Number.

#### Add Two Numbers
When the calculator is given a string of two numbers separated by a comma, add the numbers together and return their result.

### Adding Multiple Numbers

#### String with more than two numbers
When the calculator is given a string with more than two numbers separated by a comma, add all numbers together and return their result.

### Negative Numbers

#### Negative Numbers Not Allowed
When a string contains negative numbers, respond with `Negative Numbers not allowed: ` and a list of numbers that were invalid.

Example: `Negative Numbers not allowed: -1, -4`

### Missing Number in Last Position

#### Strings ending in a separator character
When a string ends in the separator character, respond with `Number expected but EOF found.`

### Separators

#### Newline as Separator
Allow either a comma or a New Line character as the separator in the number string.
