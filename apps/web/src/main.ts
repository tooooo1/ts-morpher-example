import { TsMorpher } from "@ts-morpher-example/ts-morpher";

const code = `
  class MyClass {
    sayHello() {
      console.log('Hello, World!');
    }
  }
`;

const morpher = new TsMorpher(code);

console.log(morpher.emit());
