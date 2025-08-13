import { useState } from 'react'
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
      <Header>Official To-do List!!!!</Header>
      <main>
        <AddToDo></AddToDo>
        <div className="container">
          
        </div>
      </main>
      <Footer>Strona stworzona dla jaj i jest copyright</Footer>
    </>
  )
}

export default App
