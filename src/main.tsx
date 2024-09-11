import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import { Register } from './pages/register/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewArea } from './pages/newArea/NewArea';
import { RecoilRoot } from 'recoil';
import Page404 from './pages/page404/Page404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Register></Register>,
    errorElement: <Page404 />,
  },
  {
    path: "nova-area",
    element: <NewArea />,
    errorElement: <Page404 />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>,
)
