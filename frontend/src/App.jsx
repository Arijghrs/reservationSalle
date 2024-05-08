import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import IndexPage from "./pages/IndexPage";
import RoomPages from "./pages/RoomPages";


//import {UserContextProvider} from "./UserContext";

axios.defaults.baseURL = 'http://localhost:8800';

function App(){
  return (
    
      <Routes>
       
       <Route path="/" element={<Layout />}>
       <Route index element={<IndexPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/RoomPages/:id" element={<RoomPages/>}></Route>
        

      </Route>
      


      </Routes>
    
  )
}

export default App
