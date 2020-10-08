import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {

  const [{ user }, dispatch] = useStateValue();
  //const user = 'sangee'
  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
          <>

            <Header></Header>

            <div className="app__body">
              <Sidebar></Sidebar>
              <Feed></Feed>
              <Widgets></Widgets>

            </div>




          </>
        )}


    </div>

    //for deploying npm i -g firebase-tools
    //firebase logout
    //firebase login
    // firebase init
    // public repo : build
    // npm run build
    //firebase deploy


  );
}

export default App;
