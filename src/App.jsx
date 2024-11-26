import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { AuthProvider } from "./contexts/AuthContext";
import { ApplicationsProvider } from "./contexts/ApplicationsContext";

function App() {
  return (
    <AuthProvider>
      <ApplicationsProvider>
        <RouterProvider router={router} />
      </ApplicationsProvider>
    </AuthProvider>
  );
}

export default App;

