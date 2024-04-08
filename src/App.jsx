import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTEsting();
  }, []);

  const apiTEsting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <>App</>;
}

export default App;
