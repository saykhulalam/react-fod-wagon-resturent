import { useState } from "react";
import "./App.css";
import Nave from "../src/components/Nave";
import Banner from "./components/Banner";
import Work from "./components/Work";
import Bargar from "./components/Bargar";
import Search from "./components/Search";
import Best from "./components/Best";
import Are from "./components/Are";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nave />
      <Banner />
      <Work />
      <Bargar />
      <Search />
      <Best />
      <Are />
      <Footer />
    </>
  );
}

export default App;
