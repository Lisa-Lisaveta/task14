function solveEquation(a, b, c) {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    console.log('No solutions');
    return false;
  }
  const x1 = (-b + Math.sqrt(D)) / 2 * a;
  const x2 = (-b - Math.sqrt(D)) / 2 * a;
  console.log('x1 = ' + x1 + '; x2 = ' + x2);
  return true;
}

function isPrime(a) {
  if (a <= 1) {
    console.log(false);
    return false;
  }
  if (a === 2) {
    console.log(true);
    return true;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

function calcSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += 1 / i;
  }
  console.log(result);
}

function reverseNumber(n) {
  n += '';
  const result = parseInt(n.split('').reverse().join(''), 10);
  console.log(result);
  return result;
}
