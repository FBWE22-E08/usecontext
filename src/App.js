import { useState, createContext } from "react";
import "./App.css";
import CounterOne from "./example2/CounterOne";
import CounterProvider from "./example2/CounterProvider";
import Header from "./Header";
import Main from "./Main";

// 1. createContext (The CONTEXT)
export const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };
  // 2. PROVIDER
  return (
    // <CountContext.Provider value={{ count, handleIncrement }}>
    //   <div>
    //     <Header />
    //     <Main />
    //   </div>
    // </CountContext.Provider>
    <CounterProvider>
      <p>Welcome</p>
      <CounterOne />
    </CounterProvider>
  );
}

export default App;
