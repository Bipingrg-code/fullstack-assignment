import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Header />
    <div className="pt-14 min-h-[calc(100vh)] bg-slate-50 ">
      <Outlet />
    </div>
    </>
  )
}

export default App
