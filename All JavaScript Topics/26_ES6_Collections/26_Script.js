/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a Map
let map = new Map();
console.log(map);

// add elements to map
map.set(1,'html').set(2,'CSS').set(3,'JavaScript').set(4,'Bootstrap');
console.log(map);

// map.get(key)
console.log(map.get(1)); // html

// map.has(key)
console.log(map.has(10)); // false

// map.delete(key)
map.delete(2);
console.log(map);

// Size
console.log(map.size);

// map.keys()
let output = '';
for(let key of map.keys()){
    output += `${key} `;
}
console.log(output);

// map.values()
output = '';
for(let value of map.values()){
    output += `${value} `;
}
console.log(output);

// map.entries
output = '';
for(let entry of map.entries()){
    output += `Key : ${entry[0]} => value : ${entry[1]} \n`;
}
console.log(output);

// clear
map.clear();
console.log(map);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let set = new Set();
set.add('html');
set.add('html');
set.add('css');
set.add('html');
console.log(set);

// has
console.log(set.has('css')); // true

// size
console.log(set.size); //

// clear
set.clear();
console.log(set);
