import { useState } from 'react'
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
import Footer from './components/Footer';


function App() {
  const AddToDoInput=document.querySelector(".AddToDo__input");
  let [TodoElements,SetTodoElements]=useState([]);
  function AddElement(){
    if(AddToDoInput.value!=''){
    SetTodoElements([...TodoElements,{id: Date.now(),text:AddToDoInput.value}]);
    AddToDoInput.value='';
    }
    else{
      alert("You have to enter text!!")
    }
  };
  return (
    <>
      <Header>Official To-do List!!!!</Header>
      <main>
        <AddToDo onClick={AddElement}></AddToDo>
        <div className="container">
          
        </div>
      </main>
      <Footer>Strona stworzona dla jaj i jest copyright</Footer>
    </>
  )
}

export default App
