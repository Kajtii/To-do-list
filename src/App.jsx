import { useState } from 'react'
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
import Footer from './components/Footer';


function App() {
  let [number,SetNumber]=useState(1);
  let [todoElements,SetTodoElements]=useState([]);
  function AddElement(){
    const AddToDoInput=document.querySelector(".AddToDo__input");
    if(AddToDoInput.value!==''){
    const neww={id: number,title: AddToDoInput.value};
    SetTodoElements([...todoElements,neww]);
    SetNumber(number+1);
    AddToDoInput.value='';
    console.log(todoElements);
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

          {todoElements.map(el=>(
             <ToDo key={el.id} text={el.title} id={el.id}></ToDo>
        ))}
            

        </div>
      </main>
      <Footer>Strona stworzona dla jaj i jest copyright</Footer>
    </>
  )
}

export default App
