export function sum(...values: number[]): number {
    
    return values.reduce(add,0);

    function add(total: number, val: number) {
        return total + val;
    }
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(2));
console.log(sum());
console.log(sum('a'));  