// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { useAppContext } from './contexts/AppContext';
import AddHotel from './pages/AddHotel';
import MyHotels from './pages/MyHotels';
import EditHotel from './pages/EditHotel';
import Search from './pages/Search';

function App() {
  const {isLoggedIn} = useAppContext();
  return (
    <Router>
      <Routes>
        

        //Home Page
        <Route 
          path='/' 
          element={
            <Layout>
              HomePage
            </Layout>}>

        </Route>

        //Search Page    
        <Route
          path="/search"
          element={
            <Layout>
              <Search/>
            </Layout>
          }
        />


        <Route
          path="/register"
          element={
            <Layout>
              <Register/>
            </Layout>
          }
        />
        
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn/>
            </Layout>
          }
        />

        {
          isLoggedIn&&
          <>
            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
          </>
        }
        {
          isLoggedIn&&
          <>
            <Route
              path="/my-hotels"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
          </>
          
        }

        
        

        <Route path='*' element={<Navigate to = "/"></Navigate>}></Route>
      </Routes>
    </Router>
  )
}

export default App
