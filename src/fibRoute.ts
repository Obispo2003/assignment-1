// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const num = req.params.num;
  const fibN = Number(fibonacci(parseInt(num)));
  let result = String(`fibonacci(${num}) is ${fibN}`);

  if (fibN < 0) {
    result = String(`fibonacci(${num}) is undefined`);
  }

  res.send(String(result));
};
