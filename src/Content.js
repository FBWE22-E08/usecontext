import { useContext } from "react";
import { CountContext } from "./App";

const Content = () => {
  // 3.CONSUMER
  const { count, handleIncrement } = useContext(CountContext);
  return (
    <div>
      <p>the count is {count}</p>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
};

export default Content;
