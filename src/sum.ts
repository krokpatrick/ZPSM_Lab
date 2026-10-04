export function sum(...values: unknown[]): number {

    let total: number = 0;
    
    for (let i = 0; i < values.length; i++)
    {
        if (typeof(values[i]) === 'number')
        {
            if (Number.isNaN(values[i]))
            {
                console.log("Argument " + (i + 1) + " is not a number. " + "Value " + JSON.stringify(values[i]) + " is of type: " + values[i]);
            }
            else
            {
                total += values[i] as number;
            }
            
        } 
        else
        {
            console.log("Argument " + (i + 1) + " is not a number. " + "Value " + JSON.stringify(values[i]) + " is of type: " + typeof(values[i]));
        }
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(2));
console.log(sum());
console.log(sum('a'));
console.log(sum(5, '5'));
console.log(sum(1, NaN, null));