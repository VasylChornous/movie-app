import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomeScreen />}
      />
      <Route
        path="/about-us"
        element={<AboutUs />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
