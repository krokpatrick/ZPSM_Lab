export class Calculator {
    private readonly values: number[] = [];
    private readonly rejected: unknown[] = [];

    constructor(input: unknown[]) {

        this.rejected = [];
        this.values = [];
    
        for (let i = 0; i < input.length; i++)
        {
            if (typeof(input[i]) === 'number')
            {
                if (Number.isNaN(input[i]))
                {
                    console.log("Argument " + (i + 1) + " is not a number. " + "Value " + JSON.stringify(input[i]) + " is of type: " + input[i]);
                    this.rejected.push(input[i]);
                }
                else
                {
                    this.values.push(input[i] as number);
                }
                
            } 
            else
            {
                console.log("Argument " + (i + 1) + " is not a number. " + "Value " + JSON.stringify(input[i]) + " is of type: " + typeof(input[i]));
                this.rejected.push(input[i]);
            }
        }
    }

    add(): number {

        let total : number = 0;

        for (let i of this.values)
        {
            total += i;
        }

        return total;
    }

    subtract(): number {

        let total = 0;

        if (this.values.length === 1)
        {
            total -= this.values[0] as number;
        }
        else if (this.values.length > 1)
        {
            total += this.values[0] as number;

            let first : boolean = true;

            for (let i of this.values)
            {
                if (first)
                {
                    first = false;
                }
                else
                {
                    total -= i;
                }
            }
        }

        return total;
    }

    multiply(): number {

        let total : number = 0;

        if (this.values.length === 1)
        {
            total = this.values[0] as number;
        }
        else if (this.values.length > 1)
        {

            total = 1;

            for (let i of this.values)
            {
                total *= i;
            }
        }

        return total;
    }

    divide(): number{

        let total : number = 0;

        if (this.values.length === 1)
        {
            total = this.values[0] as number;
        }
        else if (this.values.length > 1)
        {

            total = this.values[0] as number;

            let first : boolean = true;

            for (let i of this.values)
            {
                if (first)
                {
                    first = false;
                }
                else
                {
                    if (i === 0)
                    {
                        console.log("Error: Division by zero, skipping value...");
                    }
                    else
                    {
                        total /= i;
                    }
                }
            }
        }

        return total;
    }
}