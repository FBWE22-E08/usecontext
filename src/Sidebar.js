import { useContext } from "react";
import { CountContext } from "./App";

const Sidebar = () => {
  // 3.Consumer
  const { count } = useContext(CountContext);
  return <p>The count is {count}</p>;
};

export default Sidebar;
