import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


import { useState } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Countries from './components/Countries'
import './css/NavBar.css'
import './css/Body.css'
import './css/Countries.css'
import data from './data'

export default function App() {

  // const router = createBrowserRouter(
  //   <Route>
  //       <Route path="" element={}></Route>
  //   </Route>
  // )


  // TOGGLE-DARK STATE
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  
  // TOGGLE-DROPDOWN
  const [dropDown, setDropDown] = useState(false)
  function toggleDropDown(){
      setDropDown(prevDropDown => !prevDropDown)
  }
  
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element={ <Body
          toggleDropDown = {toggleDropDown}
          dropDown = {dropDown}
          darkMode = {darkMode}
        />}>
        </Route>
        <Route path='/Countries/:name' element={<Countries data={data} darkMode = {darkMode} /> }/>
    </Route>
  )
 )

  return (
      <div className='body'>
        <NavBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <RouterProvider router={router}
        />
        </div>
  )
}

