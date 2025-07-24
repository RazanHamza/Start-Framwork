import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './assets/Components/Footer/Footer'
import Navbar from './assets/Components/Navbar/Navbar'
import About from './assets/Components/About/About'
import Contact from './assets/Components/Contact/Contact'
import Portofolio from './assets/Components/Portofolio/Portofolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/Components/Layout/Layout'
import NotFound from './assets/Components/NotFound/NotFound'
import Home from './assets/Components/Home/Home'

 const routers = createBrowserRouter([
  {path:'/',element:<Layout/> ,children:[
{  index:true , element:<Home/>},
{  path:'about', element:<About/>},
{path:'contact',element:<Contact/>},
{path:'portofolio',element:<Portofolio/>},
{path:'*',element:<NotFound/>}

  ]}
])
function App() {
  

  return (
    <>
    <RouterProvider router={routers}>


    </RouterProvider>
    </>
  )
}

export default App
