import { BrowserRouter } from "react-router-dom";

import "./App.css";
import BaseLayout from "./layout/BaseLayout";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
};

export default App;
