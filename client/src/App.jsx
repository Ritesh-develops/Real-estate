import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
