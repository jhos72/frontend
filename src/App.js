import { Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";

import PropietarioLayout from "./Layouts/PropietarioLayout";
import InquilinoLayout from "./Layouts/InquilinoLayout";

function App() {
  const { userType } = useUser();

  return (
    <Routes>
      <Route
        path="/*"
        element={
          userType === "propietario"
            ? <PropietarioLayout />
            : <InquilinoLayout />
        }
      />
    </Routes>
  );
}

export default App;
