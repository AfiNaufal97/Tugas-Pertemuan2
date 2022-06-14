import React, { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Input from "./components/Input";
import LIstItem from "./components/LIstItem";

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
    new:""
  });
  const [isBool, setIsBool] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [indexVal, setIndexVal] = useState(0);

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    if (isBool) {
      let dataUpdate = newTaskValue;
      let dataNew = []
      for(let i= 0; i< taskList.data.length; i++){
        if(i === indexVal){
          dataNew.push(dataUpdate)
        }else{
          dataNew.push(taskList.data[i])
        }
      }
      setTaskList({data:dataNew})
      setIsBool(false);
    } else {
      const newData = taskList.data;
      newData.push(newTaskValue);
      setTaskList({ data: newData });
      setNewTaskValue("");
    }
  };

  const actionUpdateTask = (event) => {
    setIsBool(true);
    setIndexVal(event)
    setNewTaskValue(taskList.data[event]);
  };

  const actionDeleteTask = (event) => {
    setTaskList(taskList.data.slice(taskList.data.indexOf(event, 1)))
  };

  return (
    <div>
      <br />
      <div className="bg-[#ed8975]/[0.5] border-2 shadow-lg max-w-3xl rounded-lg p-3 m-auto">
        <Title title="Add Todo List" />
        <Input
          placeholder="Masukan Inputan"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
        />
        <Button text={isBool ? "update" : "Add Task"} onClick={actionAddTask} />
      </div>
      <div>
        <ul>
          {taskList.data.map((item, index) => (
            <LIstItem name={item} update={()=>actionUpdateTask(index)}  delete={()=>actionDeleteTask(index)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
