import React from 'react'
import { useNavigate, BrowserRouter, Routes, Route} from 'react-router-dom'
const  Dashboard = React.lazy(() => import('./pages/Dashboard'))
const  Landing  = React.lazy(() => import ('./pages/Landing'))

function App() {

  return (
    <div>
      <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<React.Suspense fallback='Dashboard page'> <Dashboard/> </React.Suspense>}/>
        <Route path="/" element={<React.Suspense fallback='Landing'> <Landing/> </React.Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
        <button onClick= {() => {
          navigate("/");
        }}>Landing page </button>

        <button onClick = {() => {
          navigate("/dashboard");
        }} >Dashboard</button>
      </div>
  )
}

export default App

/*
useNaviagte can only be used inside the BrowserRouter
alernate for navigate is window.location.href
*/
