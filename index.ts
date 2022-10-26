// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
import 'core-js';

class Person {
  constructor(public name: string) {}
  greet() {
    console.log(this.name);
  }
}

const foo = new Person('foo');
const bar = structuredClone(foo);
foo.greet();
bar.greet();
