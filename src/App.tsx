import { useState } from 'react';
import './index.css';

function App() {
  const [taskArray, setTaskArray] = useState(['Orange', 'Apple']);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <h1 className="text-5xl text-emerald-700 font-bold my-5">To Do List</h1>

      {/* input form to add  */}
      <form
        action=""
        onSubmit={(form) => {
          // add inputValue to array taskArray
          setTaskArray([...taskArray, inputValue]); // spread array first, then add new task
        }}
        className="my-2 text-xl "
      >
        {/**TODO: add more width */}
        <input
          className="bg-gray-100 rounded-lg p-1"
          type="form"
          placeholder="Add Task"
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button
          type={'submit'}
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
            <li className="my-2 text-xl" key={task}>
              {task}
              <button className="border m-1 p-2 rounded-lg">☝</button>
              <button className="border m-1 p-2 rounded-lg">👇</button>
              <button className="border m-1 p-2 rounded-lg bg-red-500 text-white">
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
