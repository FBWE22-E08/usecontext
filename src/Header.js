import { useContext } from "react";
import {CountContext} from "./App"

const Header = () => {
    // 3. CONSUMER
    const {count}=useContext(CountContext);
  return <h1>You Clicked {count} times</h1>;
};

export default Header;
