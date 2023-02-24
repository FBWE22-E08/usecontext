import { useContext } from "react";
import { x, y } from "./CounterProvider";

const CounterOne = () => {
  // 3. Consumer
  const number = useContext(x);
  const setNumber = useContext(y);
  return (
    <div>
      <h1>Number is : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click me</button>
    </div>
  );
};

export default CounterOne;
