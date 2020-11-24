import {useState} from 'react';
import Duties from './componenets/Duties';
import Header from './componenets/Header';
import Newduty from './componenets/Newduty';

function App () {
  const [duties, setDuties] = useState ([]);
  const [duty, setDuty] = useState ('');
  const [doneTask, setDoneTask] = useState ([]);


  const newDuty = event => {
    setDuty (event.target.value);
  };

  const hadleSubmitNew = () => {
    const tasksArr = [...duties];
    const task = {
      id: Math.floor (Math.random () * 100),
      duty,
      done: false,
      edit: false,
      confirm : false
    };
    if (duty !== ' ' && duty !== '') {
      tasksArr.push (task);
      setDuties (tasksArr);
      setDuty ('');
    }
  };

  const handleConfirmation = (id) => {
    const tasksArr = [...duties];
    const confirmIndex = tasksArr.findIndex(each => each.id === id);
    const confirmValue = tasksArr[confirmIndex];
    confirmValue.confirm = true;
    tasksArr[confirmIndex] = confirmValue;
    setDuties(tasksArr);
  };

  const handleDelete = () => {
    const tasksArr = [...duties];
    const selectItemIndex = tasksArr.findIndex (each => each.confirm === true);
    const selectItemValue = tasksArr[selectItemIndex];
    selectItemValue.done = false;
    doneAmounth ();
    const felteredTask = tasksArr.filter (each => each.confirm === false);
    setDuties (felteredTask);
  };

  const handleDoneDuty = id => {
    const taskArr = [...duties];
    const taskIndex = taskArr.findIndex (each => each.id === id);
    const taskValue = taskArr[taskIndex];
    taskValue.done = !taskValue.done;
    taskArr[taskIndex] = taskValue;
    setDuties (taskArr);
    doneAmounth ();
  };

  const doneAmounth = () => {
    const taskArr = [...duties];
    const doneFilter = taskArr.filter (each => each.done === true);
    setDoneTask (doneFilter);
  };

  const handleEditInput = id => {
    const taskArr = [...duties];
    const editIndex = taskArr.findIndex (each => each.id === id);
    const editValue = taskArr[editIndex];
    editValue.edit = !editValue.edit;
    taskArr[editIndex] = editValue;
    setDuties (taskArr);
  };

  const handleEditTask = (id, event) => {
    const taskArr = [...duties];
    const index = taskArr.findIndex (each => each.id === id);
    const value = taskArr[index];
    value.duty = event.target.value;
    taskArr[index] = value;
    setDuties (taskArr);
  };

  return (
    <div>
      <Header />
      <Newduty
        newDuty={newDuty}
        hadleSubmitNew={hadleSubmitNew}
        duty={duty}
        duties={duties}
        doneTask={doneTask}
      />
      <Duties
        dutiesArr={duties}
        handleDelete={handleDelete}
        handleDoneDuty={handleDoneDuty}
        handleEditInput={handleEditInput}
        handleEditTask={handleEditTask}
        handleConfirmation={handleConfirmation}
      />
    </div>
  );
}

export default App;
