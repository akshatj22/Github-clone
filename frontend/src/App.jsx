
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import HomePage from './Pages/HomePage'
import ExplorePage from './Pages/ExplorePage'
import LikesPage from './Pages/LikesPage'
import Sidebar from './Components/Sidebar'
function App() {


  return (
<div className='flex text-white '>
  <Sidebar />
  <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/likes' element={<LikesPage />} />
    </Routes>
  </div>
</div>
  )
}

export default App
