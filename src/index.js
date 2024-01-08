import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Render1 from './page2/Render';
import RoundContainer from './page2/signup';
import TemporaryDrawer from './filterpage.js/leftfilter';
import Up from './upload.js/up';
import Result from './result.js/result';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Final from './Final_page/final';
import Round from './round';
import DontMiss from './dontmiss/dontmiss';
import Whislist from './whislist/whislist';
import Wishlist from './whislist/whislist';
import { Upload } from '@mui/icons-material';
import Goo from './google/google2';
import About from './aboutpage/about';
import Login from './google/google2';
import { LoginDataProvider } from './loginDataContext';
import Profile from './profile/profile';
import YourComponent from './server/testing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <LoginDataProvider>
<Routes>
     <Route path="/" element={<App/>}/>
     <Route path="/filter" element={<TemporaryDrawer/>}>
     </Route>
     <Route path="/result" element={<Result/>} />
  <Route path="/wishlist" element={<Wishlist/>}/>
  <Route path="/final" element={<Final/>}/>
  <Route path="/upload" element={<Up/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/login' element={<Login/>}/>
 <Route path='/profile' element={<Profile/>}/>
   </Routes>
   </LoginDataProvider>
 </BrowserRouter>

);



reportWebVitals();
