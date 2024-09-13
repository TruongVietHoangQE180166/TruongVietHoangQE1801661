// 1. Enhanced Object Manipulation (Destructuring, Shorthand Properties, Computed Property Names)
function enhancedObjectManipulation() {
    const person = { name: 'Alice', age: 25, job: 'Developer' };
    
    // Destructuring
    const { name, age } = person;
    console.log('Destructuring:', name, age); // Output: Alice 25
  
    // Object Shorthand Properties
    const city = 'New York';
    const newPerson = { name, age, city };
    console.log('Shorthand Properties:', newPerson); // Output: { name: 'Alice', age: 25, city: 'New York' }
  
    // Computed Property Names
    const key = 'language';
    const personWithLanguage = { ...newPerson, [key]: 'JavaScript' };
    console.log('Computed Property Names:', personWithLanguage); // Output: { name: 'Alice', age: 25, city: 'New York', language: 'JavaScript' }
  }
  
  // 2. Default Parameters
  function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  // 3. Rest Operator in Function Parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // 4. Spread Operator with Arrays and Objects
  function spreadOperatorDemo() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log('Spread with Arrays:', arr2); // Output: [1, 2, 3, 4, 5]
  
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    console.log('Spread with Objects:', obj2); // Output: { a: 1, b: 2, c: 3 }
  }
  
  // Running the demo
  enhancedObjectManipulation();
  greet();               // Output: Hello, Guest!
  greet('John');         // Output: Hello, John!
  console.log('Sum:', sum(1, 2, 3, 4, 5));  // Output: Sum: 15
  spreadOperatorDemo();
  