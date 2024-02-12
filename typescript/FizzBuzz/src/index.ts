function isDivisibleBy5(input: number):boolean {
    return isDivisibleBy(5, input)
}

function isDivisibleBy3(input: number):boolean {
    return isDivisibleBy(3, input)
}

function isDivisibleBy(divisor:number, input:number):boolean   {
    return input % divisor ===0;
}

export function calculate(input : number) : string {
    if( isDivisibleBy5(input) && isDivisibleBy3(input) ) return 'fizzbuzz'
    if (isDivisibleBy5(input) ) return 'buzz';
    if (isDivisibleBy3(input) ) return 'fizz';

    return String(input)
}
