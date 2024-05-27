import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/homw.jsx'
import About from './about/About.jsx'
import Contact from './components/contect us/contact.jsx'
import User from './components/user/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: < Layout/> ,
//     children: [
//       {
//         path: '/',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>
      
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:id' element={<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
