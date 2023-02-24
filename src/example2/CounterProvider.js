import { createContext, useState } from "react";

// 1. createContext
export const x =createContext(); //state
export const y =createContext(); // setState

const CounterProvider = ({children}) => {
  const [number, setNumber] = useState(0);
//   2. Provider
  return (
    <div>
        <x.Provider value={number}>
          <y.Provider value={setNumber}>
           {children}
          </y.Provider>
        </x.Provider>
    </div>
  )
};

export default CounterProvider;
