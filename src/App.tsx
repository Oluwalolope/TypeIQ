import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import AppContextProvider from "./store/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}
 
export default App;