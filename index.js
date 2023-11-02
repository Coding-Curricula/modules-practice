import _ from 'lodash';

import person from './person.js';

import personName, { pet, greet } from './name.js';

console.log(person.name); // santa claus

console.log(personName); // Bruce Willis
console.log(pet.name); // Cheddar
console.log(greet(pet.name)); // Hello Bruce Willis

const nums = _.range(10);
console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const nums2 = _.range(0, 100, 2);
console.log(nums2); // [ 0, 2, 4, 6, 8 ]

const compact = _.compact([0, 1, false, 2, '', 3, true]);
console.log(compact);

/* The line `const difference = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);` is using the `_.difference`
function from the lodash library to find the difference between two arrays. */
const difference = _.difference([1, 2, 3, 4, 5], [5, 2]);
console.log(difference); // [ 1 ]

