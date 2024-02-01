import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Pagenotfound from './components/Pagenotfound'
import { ToastContainer } from 'react-toastify'
import Landingpage from './components/Landingpage'
import Dashboard from './components/Dashboard'
const DashboardLayout = () => {
  let token = localStorage.token
  return (
    <Routes>
      <Route path='dashboard/' element={token ? <Outlet /> : <Navigate to={'/login'} />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path='/*' element={<DashboardLayout />} />
        <Route path='*' element={<Pagenotfound />} />
        <Route />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>

  )
}

export default App
