import { Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import About_me from './pages/About_me';
import Contact_me from './pages/Contact_me';
import My_projects from './pages/My_projects';
import My_skills from './pages/My_skills';



function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/project' element={<My_projects/>}></Route>
      <Route exact path='/about' element={<About_me/>}></Route>
      <Route exact path='/skills' element={<My_skills/>}></Route>
      <Route exact path='/contact' element={<Contact_me/>}></Route>
     
    </Routes>
      
    </>
  );
}

export default App;
