// util function that computes the fibonacci numbers
export default function fibonacci(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fibonacci(Number(n) - 1) + fibonacci(Number(n) - 2);
}
