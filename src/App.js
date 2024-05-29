import "./assets/styles/reset.scss";
import { Routes, Route } from "react-router-dom";
import HomepageLayout from "./Layout/HomepageLayout/HomepageLayout";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
