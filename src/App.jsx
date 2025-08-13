import { useState } from 'react'
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <Header></Header>
      <main>
        <AddToDo></AddToDo>
        <div className="container">
          
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
