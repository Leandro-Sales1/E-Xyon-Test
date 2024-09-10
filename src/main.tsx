import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import { Register } from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Register></Register>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
