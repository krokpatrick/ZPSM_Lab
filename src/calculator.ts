export class Calculator {
    private readonly values: number[] = [];
    private readonly rejected: [unknown, number][] = [];

    constructor(input: unknown[]) {

        this.values = input.filter(
            (value, index): value is number => {
                if (typeof value === "number" && !Number.isNaN(value)) {
                    return true;
                }

                console.log(
                    "Argument " + (index + 1) + " is not a number." + " Value " + JSON.stringify(value) + " is of type: " + value
                );

                return false;
            }
        );

        this.rejected = input.reduce(
            (rejected: [unknown, number][], value, index) => {
                if (typeof value !== "number" || Number.isNaN(value)) {
                    rejected.push([value, index]);
                }

                return rejected;
            },
            []
        );
    }

    add(): number {

        return this.values.reduce(
            (total, value) => total + value,
            0
        );
    }

    subtract(): number {

        if (this.values.length === 0)
        {
            return 0;
        }

        if (this.values.length === 1)
        {
            return -(this.values[0] as number);
        }

        return this.values.slice(1).reduce(
            (total, value) => total - value,
            this.values[0] as number
        );
    }

    multiply(): number {

        if (this.values.length === 0) {
            return 0;
        }

        return this.values.reduce(
            (total, value) => total * value,
            1
        );
    }

    divide(): number{

        if (this.values.length === 0)
        {
            return 0;
        }

        return this.values.slice(1).reduce(
            (total, value) => {
                if (value === 0) {
                    console.log("Error: Division by zero, skipping value...");
                    return total;
                };

                return total/value;
            },
            this.values[0] as number
        );
    }

    rejectedValues() : [unknown, number][] {
        return this.rejected;
    }

    max(): number {

        if (this.values.length === 0)
        {
            return NaN;
        }
        else if (this.values.length === 1)
        {
            return this.values[0] as number;
        }
        else {  
            let temp : number = this.values[0] as number;

            for (let i = 0; i < this.values.length; i++)
            {
                if (this.values[i] as number > temp)
                {
                    temp = this.values[i] as number;
                }
            }

            return temp;
        }
        
    }

    min(): number {

        if (this.values.length === 0)
        {
            return NaN;
        }
        else if (this.values.length === 1)
        {
            return this.values[0] as number;
        }
        else {  
            let temp : number = this.values[0] as number;

            for (let i = 0; i < this.values.length; i++)
            {
                if (this.values[i] as number < temp)
                {
                    temp = this.values[i] as number;
                }
            }

            return temp;
        }
        
    }

    mean() : number {
        if (this.values.length === 0)
        {
            return NaN;
        }
        else if (this.values.length === 1)
        {
            return this.values[0] as number;
        }
        else
        {
            let temp : number = 0;
            for (let i = 0; i < this.values.length; i++)
            {
                temp += this.values[i] as number;
            }

            return (temp / this.values.length);
        }
    }

    
}