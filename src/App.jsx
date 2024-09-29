import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import { Provider } from './Context/Context';

function App(props) {
    return (
        <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Provider><Login/></Provider>}/>
        <Route path='/SignUp' element={
          <Provider><SignUp/></Provider>
          }/>
          <Route path='/Home' element={<Provider><Home/></Provider>}/>
      </Routes>
      </BrowserRouter>
        </div>
    );
}

export default App;