import { Calculator } from './calculator.ts';

const course: string = 'ZPSM';
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);

const calc = new Calculator([2, 'seven', 4, null, 8]);

console.log("calc1: " + calc.add());
console.log("calc1: " + calc.subtract());
console.log("calc1: " + calc.multiply());
console.log("calc1: " + calc.divide());
console.log("calc1: " + calc.max());
console.log("calc1: " + calc.min());
console.log("calc1: " + calc.mean());

const calc2 = new Calculator([1, 'five', null]);

console.log("calc2: " + calc2.add());
console.log("calc2: " + calc2.subtract());
console.log("calc2: " + calc2.multiply());
console.log("calc2: " + calc2.divide());
console.log("calc2: " + calc2.max());
console.log("calc2: " + calc2.min());
console.log("calc2: " + calc2.mean());

const calc3 = new Calculator([]);

console.log("calc3: " + calc3.add());
console.log("calc3: " + calc3.subtract());
console.log("calc3: " + calc3.multiply());
console.log("calc3: " + calc3.divide());
console.log("calc3: " + calc3.max());
console.log("calc3: " + calc3.min());
console.log("calc3: " + calc3.mean());