import { useState } from 'react'
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  let [number,SetNumber]=useState(1);
  let [todoElements,SetTodoElements]=useState([]);
  function AddElement(){
    const AddToDoInput=document.querySelector(".AddToDo__input");
    if(AddToDoInput.value!==''){
    const neww={id: number,title: AddToDoInput.value, pin:false};
    SetTodoElements([...todoElements,neww]);
    SetNumber(number+1);
    AddToDoInput.value='';
    console.log(todoElements);
    }
    else{
      alert("You have to enter text!!")
    }
  };
  function RemoveElement(removeID){
    SetTodoElements(todoElements.filter(el => el.id !== removeID));
  }
  function EditElement(numb){
    const edit=prompt("Enter new text: ");
          if(edit){
            SetTodoElements(prev =>
      prev.map(item =>
        item.id === numb ? { ...item, title: edit } : item
      )
    );
          }
          else{
              alert("You have to enter text!!")

          }
  }
  function PinElement(id){

    SetTodoElements(prev =>{
      const updated=
      prev.map(item =>
        item.id === id ? { ...item, pin:!item.pin } : item
      );
      return updated.sort((a, b) => {
  if (a.pin !== b.pin) return a.pin ? -1 : 1;
  return a.title.localeCompare(b.title); 
})});
  }
  return (
    <>
      <Header>Official To-do List!!!!</Header>
      <main>
        <AddToDo onClick={AddElement}></AddToDo>
        <div className="container">

          {todoElements.map(el=>(
             <ToDo key={el.id} text={el.title} id={el.id} buttons={[<Button key={el.id+".pin"} onClick={()=>{
              PinElement(el.id)
        }}/>,
        <Button key={el.id+".edit"} onClick={()=>{
          EditElement(el.id);
        }}/>,
        <Button key={el.id+".remove"} onClick={()=>{RemoveElement(el.id)}}/>]}></ToDo>
        ))}
            

        </div>
      </main>
      
    </>
  )
}

export default App
