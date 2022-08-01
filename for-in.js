const obj1 = { a: 3, b: 4, c: 5 };

for (const property in obj1) {
  console.log(`${property}: ${obj1  [property]}`);
}
