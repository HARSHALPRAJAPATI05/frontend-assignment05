import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task2 from './Task2'
import Task3 from './Task3'
// import Home from './Task5'
import About from './Taskfive'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Navbar from './Task6Navbar'
import Contact from './Task6Contact'
import UsersTable from './Task7UserTable'
import JsonServerCRUD from './Task7jsoncrud'
import Auth from './Task8Auth'
import GoogleLogin from './Task8GoogleLogin'
import CrudFirebase from './Task8CrudFirebase'
import ApiWithLoader from './Task9ApiWithLoader'
import ThemeProvider from "./Task10ThemeContext";
// import Navbar from "./Task10Navbar";
// import Home from "./Task10Home";
import AuthProvider from "./Task11AuthContext";
import Navbar from "./Task11Navbar";
import Dashboard from "./Task11Dashboard";
import HooksTask1 from './HooksTask1'
import HooksTask4 from './HooksTask4'
import HomeRoutingTask5 from './Task5'
import AboutRoutingTask5 from './Taskfive'
// import Counter from './Task12Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* ----- Hooks ----- */}
      {/* <HooksTask1 /> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <HooksTask4 /> */}
       <BrowserRouter>
       <Navbar />
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
          <Route path="/" element={<HomeRoutingTask5 />} />
          <Route path="/about" element={<AboutRoutingTask5 />} />
      </Routes>
       {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      {/* <UsersTable /> */}
      {/* <JsonServerCRUD /> */}
      {/* <Auth /> */}
      {/* <GoogleLogin /> */}
      {/* <CrudFirebase /> */}
      {/* <ApiWithLoader /> */}
      {/* <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider> */}
    {/* <AuthProvider>
      <Navbar />
      <Dashboard />
    </AuthProvider> */}
    {/* <Counter /> */}
    </BrowserRouter>
    </>
  )
}

export default App
