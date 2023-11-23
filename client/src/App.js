 import { Route , Routes } from 'react-router-dom';
import './App.css';
 import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact';
import AddContact from './Pages/AddContact/AddContact';
import EditContact from './Pages/EditContact/EditContact';
 import RegisterUser from './Pages/RegisterUser/RegisterUser';
import LoginUser from './Pages/LoginUser/LoginUser';
 
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/*" element={<Error/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/AddContact" element={<AddContact/>} />
      <Route path="/Editcontact/:id" element={<EditContact />}/>
      <Route path='login' element={<LoginUser/>}/> 
      <Route path='register' element={<RegisterUser/>}/> 
      </Routes>
        </div>
  );
}

export default App;
