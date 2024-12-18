import Login from "./pages/Login"
import Staff from "./pages/Staff"
import Dashboard from "./pages/Dashboard"
import Department from "./pages/SettingsDepartment"
import Sidebar from "./pages/Sidebar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  

  return (
    <>
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/staff" element={<Staff/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App