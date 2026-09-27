import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
const router = createBrowserRouter([{
  path: "/",
  Component: Root,
  children: [
    {
      index: true,
      Component: Home
    },

    {
      path: "mobiles",
      Component: Mobiles
    },
    {
      path: "laptops",
      Component: Laptops
    }
  ]

},
{
  path: "/about",
  element: <div className=' flex items-center m-20 justify-center-safe'><h1 className='bg-blue-500 text-2xl font-bold'>About</h1></div>
}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
