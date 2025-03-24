export function calculateFizzBuzzNumber(input: number): string {
  if (input % 3 === 0) {
    return "Fizz";
  }

  return input.toString();
}
