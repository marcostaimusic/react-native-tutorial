import { useState } from "react";

export const useCounter = (initial: number = 1232) => {
  const [count, setCount] = useState<number>(initial); //<number> è ridondante, solo per fare un esempio

  const add = (number: number) => {
    setCount(count + number);
  };

  return {
    count,
    add,
  };
};
