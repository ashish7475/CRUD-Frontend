import React from 'react'
import {BrowserRouter , Routes ,Route } from "react-router-dom"
//React Router is a standard library for routing in React. It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.
// Routes is used to define multiple routes inside it.
// Route defines each route
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header.js'
import Home from './pages/Home.js'
import AddEdit from './pages/AddEdit.js'
import View from './pages/View.js'
import About from './pages/About.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/add" element={<AddEdit/>}/>
        <Route  path="/update/:id" element={<AddEdit/>}/>
        <Route  path="/view/:id" element={<View/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
