
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'


function App(){
  const [checkboxValue, setcheckboxValue]=useState([
    {id:1, value:true},
    {id:2, value:false},
    {id:3, value:true},
    {id:4, value:false},
  ]);
   const wwww=(id)=> {
    const updatedData = checkboxValue.map(item =>{
      if(item.id ===id){
        return{
          ...item,
          value: !item.value
        }
      }
      return item;
    })
    setcheckboxValue(updatedData);
    
   }
  const handlDelate=() =>{
    const updatedData=data.filter(item => !item.value)
    setcheckboxValue(updatedData)
  }

  return (
    <>
    <div className='app'>
      <h2>checkbox</h2>
      {checkboxValue.map (checkbox =>(
        <div key={checkbox.id}>
          
          
          <input type="checkbox" 
          checked={checkbox.value}
          onChange={() => wwww(checkbox.id)}/>
          <label >{` ${checkbox.value }`}</label>
          
        
          </div>
      ))}
      
    </div>
    </>
  );
    
    
};
export default App
