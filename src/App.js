import React from 'react';
import './App.css';
import { FirstComponenet } from './kanban/FisrtComponent';
import Card, { SecondComponent } from './kanban/Card';




const App = () => {
  const action = ['Backlog', 'To do', 'Inprogress', 'Done']

  

  return(
<div>
    <h1>kanban Task</h1>
    <br/>
    
    <FirstComponenet />
    
    <br/>
    <div className='row' >
      
      <div className='column'>
         <Card  title ={action[0]} />
         </div>
         <div className='column'>
          <Card title ={action[1]} />
          </div>
          <div className='column'>
          <Card title={action[2]} />
          </div>
          <div className='column'>
          <Card title={action[3]} />
          </div>
             </div>


          
     </div>
    
    
  );
}


export default App;