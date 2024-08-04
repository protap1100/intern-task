import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Router";
import AuthProvider from "./provider/AuthProvider";
import { CityProvider } from "./pages/mainContent/CityContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CityProvider>
      <RouterProvider router={router} />
    </CityProvider>
  </AuthProvider>
);
