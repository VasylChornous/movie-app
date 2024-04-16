import { useEffect } from "react";

import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./stores/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTEsting();
  }, []);

  const apiTEsting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:mediaType/:id"
          element={<Details />}
        />
        <Route
          path="/search/:query"
          element={<SearchResult />}
        />
        <Route
          path="/explore/:mediaType"
          element={<Explore />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
