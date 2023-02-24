const Content = ({ count, handleIncrement }) => {
  return (
    <div>
      <p>the count is {count}</p>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
};

export default Content;
