// src/component/Person.js

import React from "react";
import "../style/styleindex.css";

// Create a simple ES6 class called "Person"
class Person {
  constructor(name, studentid) {
    this.name = name;
    this.studentid = studentid;  // Corrected property name
  }

  sayHello() {
    return `Hello, my Name is: ${this.name} and my StudentId is: ${this.studentid}.`;
  }
}

// Define the DisplayHello functional component
function DisplayHello() {
  const person = new Person("Truong Viet Hoang", "QE180166"); // Updated name to "Truong Viet Hoang"
  return (
    <div>
      <h3>{person.sayHello()}</h3> {/* Display the Person's info */}
    </div>
  );
}

export default DisplayHello;
