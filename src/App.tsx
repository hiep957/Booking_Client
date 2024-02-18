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

function App() {
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
              Search
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
        

        <Route path='*' element={<Navigate to = "/"></Navigate>}></Route>
      </Routes>
    </Router>
  )
}

export default App
