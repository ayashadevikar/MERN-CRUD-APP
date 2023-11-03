
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";


function App() {
  return (
    <>
       
        <Router>
           <Routes>
                  <Route path="/" element={<Users />} />
                  <Route path="/create" element={<CreateUser />} />
                  <Route path="/update/:id" element={<UpdateUser />} />
           </Routes>
        </Router>
    </>
  );
}

export default App;
