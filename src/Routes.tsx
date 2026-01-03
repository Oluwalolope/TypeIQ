import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ResultPage from "./pages/Result";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'result',
                element: <ResultPage />
            }
        ],
    },
]);

export default router;