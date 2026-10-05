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
import Users from './Components/Users/Users.jsx';
import About from './Components/About/About.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import { CartProvider } from './context/CartContext.jsx';
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
    },
    {
  path: "about",
  Component: About,
},
{
  path: "/users",
  loader: async () => await fetch('https://jsonplaceholder.typicode.com/users'),
  Component: Users
}
,
{ path: "*", Component: NotFound }
  ]

}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider><RouterProvider router={router} /></CartProvider>
  </StrictMode>,
)
