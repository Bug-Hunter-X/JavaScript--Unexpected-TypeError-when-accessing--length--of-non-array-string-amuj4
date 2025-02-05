function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x === 'object' && Array.isArray(x)){
    return x.length; // Handle arrays
  } else if (typeof x === 'string'){
    return x.length; // Handle strings
  } else {
    return -1; // Handle other data types or return a suitable default value
  }
}

console.log(foo([1, 2, 3])); // 3
console.log(foo("hello")); // 5
console.log(foo(null)); // 0
console.log(foo(undefined)); // 0
console.log(foo(123)); // -1
console.log(foo({})); // -1