import { useState } from 'react';
import './index.css';

interface Props {
  // taskArray: string[];
}

function App({}: Props) {
  const [taskArray, setTaskArray] = useState(['Orange', 'Apple']);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (inputValue.trim() !== '') {
      setTaskArray([...taskArray, inputValue]); // spread array first, then add new task
      setInputValue('');
    }
  }
  //we need index (key) of item -> filter it out
  function handleRemoveTask(key: string) {
    setTaskArray(taskArray.filter((i) => i !== key));
  }

  //we need the task index -> check position -> array desctructring to swap -> update state
  function handleArrowUp(task: any) {
    let index: any = taskArray.indexOf(task);

    if (index > 0) {
      // const newArray = setTaskArray([...taskArray]);

      const copyArray = [...taskArray];

      // [prev element   , current element ]    = [curr element , prev element (swapped)]
      [copyArray[index - 1], copyArray[index]] = [
        copyArray[index],
        copyArray[index - 1],
      ];

      //update state with new positions
      setTaskArray(copyArray);

      console.log(taskArray);
    }
  }

  function handleArrowDown(task: string) {
    let index: any = taskArray.indexOf(task);

    if (index < taskArray.length - 1) {
      // const newArray = setTaskArray([...taskArray]);

      const copyArray = [...taskArray];

      // [prev element   , current element ]    = [curr element , prev element (swapped)]
      [copyArray[index], copyArray[index + 1]] = [
        copyArray[index + 1],
        copyArray[index],
      ];

      //update state with new positions
      setTaskArray(copyArray);

      console.log(taskArray);
    }
  }

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <h1 className="text-5xl text-emerald-700 font-bold my-5">To Do List</h1>

      {/* input form to add  */}
      <form
        action=""
        onSubmit={(form) => {
          form.preventDefault();
          handleAddTask();
        }}
        className="my-2 text-xl "
      >
        {/**TODO: add more width */}

        <input
          className="bg-gray-100 rounded-lg p-1"
          type="text"
          value={inputValue}
          placeholder="Add Task"
          //when input changes from empty , register value of input
          onChange={(event: any) => setInputValue(event.target.value)}
        ></input>

        <button
          type="submit"
          // onClick={addTask}
          className=" border m-1 p-2 rounded-lg  bg-emerald-500 text-white"
        >
          Add
        </button>
      </form>

      {/* task List */}
      <div>
        {' '}
        <ul>
          {taskArray.map((task) => (
            //set key as index of item
            <li className="my-2 text-xl" key={taskArray.indexOf(task)}>
              {task}
              <button
                className="border m-1 p-2 rounded-lg"
                onClick={() => handleArrowUp(task)}
              >
                ☝
              </button>
              <button
                className="border m-1 p-2 rounded-lg"
                onClick={() => handleArrowDown(task)}
              >
                👇
              </button>
              <button
                className="border m-1 p-2 rounded-lg bg-red-500 text-white"
                onClick={() => handleRemoveTask(task)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
