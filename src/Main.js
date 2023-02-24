import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = ({ count, handleIncrement }) => {
  return (
    <div>
      <Sidebar count={count} />
      <Content count={count} handleIncrement={handleIncrement} />
    </div>
  );
};

export default Main;
// props drilling
