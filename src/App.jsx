import { Route, Routes } from "react-router-dom";
import { About, Details, Home, Login } from "./pages";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="details" element={<PrivateRoute />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
