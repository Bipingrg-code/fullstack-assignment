import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster />
      <Header />
      <div className="pt-14 min-h-[calc(100vh)] bg-slate-50 ">
        <Outlet />
      </div>
    </>
  )
}

export default App
