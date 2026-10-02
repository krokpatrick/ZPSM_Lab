export function sum(...values: number[]): number {
    let sum: number = 0;

    for (let num of values) {
        sum += num;
    }
    
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(2, 4, 6));
console.log(sum());
console.log(sum('a'));  