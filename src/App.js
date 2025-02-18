import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from "./Pages/Favorites"
import Navbar from "./Component/Navbar"
import "./css/App.css"

function App() {

  return (
    <>

    <div>
      <Navbar />

    <main className='main=content'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
   </main>
    </div>

   
    </>
  )
}

export default App;
