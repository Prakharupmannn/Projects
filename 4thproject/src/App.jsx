
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Signin from './pages/Signin'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>

      {/* NAVBAR */}

      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Signin" element={<Signin/>} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
