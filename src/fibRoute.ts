// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const { num } = req.params;

  const fibN = Number(fibonacci(parseInt(num)));
  let result = String(`fibonacci(${num}) is ${fibN}`);

  if (fibN < 0) {
    result = String(`fibonacci(${num}) is undefined`);
  }

  res.send(result);
};
