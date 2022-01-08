import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, add } = useCounter(20);

  return (
    <div>
      <h3>Counter with Hook {count}</h3>
      <hr />
      <button className="btn btn-primary" onClick={() => add(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => add(-1)}>
        -1
      </button>
    </div>
  );
};
