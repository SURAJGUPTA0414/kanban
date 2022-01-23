import { useState } from 'react';

export const  FirstComponenet = () => {
 
  const intialTask = [

    { name: '1', stage: 0 },
  
    { name: '2', stage: 0 },
  
  ];

  const [newTask, setNewTask] = useState("");

  const [task, setTask] = useState(intialTask);

  const addTaskHandler = (newTask) => {
    const updatedTask = [newTask, ...task];
    setTask(updatedTask);
    console.log(task);
  }

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  }

    return(
        <section >
        <input  type="text" value={newTask} onChange={changeHandler} placeholder="New task name"   />
        <button type="submit" onClick={addTaskHandler} >Create task</button>
      </section>

      
    );
}
