
export function calculate(a: number, b: number, operator: '+' | '-' | '*' | '/'): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : NaN;
    default:
      throw new Error('Invalid operator');
  }
}

export function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

export function isPalindrome(input: string): boolean {
  const normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return normalized === normalized.split('').reverse().join('');
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function isAgeValid(age: number, minAge: number): boolean {
  return age >= minAge;
}


