import { Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />

        <Route path='/*' element={<Home /> } />
      </Routes>
    </div>
  )
}

export default App
