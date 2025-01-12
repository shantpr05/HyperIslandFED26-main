// TODO: Set item in localStorage
localStorage.setItem('name', 'mango');


// TODO: Get item from localStorage
let value = localStorage.getItem('name');

console.log(value); // Output: mango

// TODO: Remove item from localStorage
localStorage.removeItem('name');

// TODO: Clear all items from localStorage

localStorage.clear();

// TODO: Add an object to localStorage

let obj = { name: 'mango', price: 1.5 };
localStorage.setItem('fruit', JSON.stringify(obj));

// TODO: Get an object from localStorage

let objValue = JSON.parse(localStorage.getItem('fruit'));

console.log(objValue); // Output: { name:'mango', price: 1.5 }

// TODO: Set item in sessionStorage

sessionStorage.setItem('name', 'mango');


// TODO: Set item in sessionStorage

let sessionValue = sessionStorage.getItem('name');

console.log(sessionValue); // Output: mango

// TODO: Remove item from sessionStorage

sessionStorage.removeItem('name');

// TODO: Get item from sessionStorage
sessionStorage.setItem('name', sessionValue);


// TODO: Remove item from sessionStorage

sessionStorage.removeItem('name');


// TODO: Clear all items from sessionStorage

sessionStorage.clear();

// TODO: Add an object to sessionStorage

let user = { name:'raj', age: 15 };
sessionStorage.setItem('user', JSON.stringify(user));

// TODO: Get an object from sessionStorage

let storedUser = JSON.parse(sessionStorage.getItem('user'));

console.log(storedUser.name);
console.log(storedUser.age);


