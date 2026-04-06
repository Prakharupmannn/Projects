
import { BrowserRouter , Route , Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Aboutus from './pages/Aboutus'
// import Contact from './pages/Contact'
// import Signin from './pages/Signin'
// import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Login from "./pages/Login"
// import Day6 from "./components/Day6"
import Form from './components/Form'

function App() {

  return (
    // <>
    //   <Navbar />
    //   <BrowserRouter>

    //   {/* NAVBAR */}

    //   <Routes>
    //     <Route path="/Home" element={<Home/>}/>
    //     <Route path="/Aboutus" element={<Aboutus/>}/>
    //     <Route path="/Contact" element={<Contact/>}/>
    //     <Route path="/Signin" element={<Signin/>} />
    //   </Routes>
      
    //   </BrowserRouter>
    // </>

    // <>
    //       <Day6 />
    // </>

    // <>
    //   <Navbar2 />
    // </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Login />} />
    //     <Route path='/Navbar2' element={<Navbar2 />} />
    //   </Routes>
    // </BrowserRouter>


  <>
    <Form />
  </>
  )
}

export default App
