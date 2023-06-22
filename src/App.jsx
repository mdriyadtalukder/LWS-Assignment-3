import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './component/Navbar';
function App() {
  

  return (
    <Provider store={store}>
      <div>
        <Navbar></Navbar>

      </div>
    </Provider>

  )
}

export default App
