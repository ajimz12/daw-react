import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask, editTask, toggleTaskCompletion } =
    useContext(TaskContext);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 mb-2 bg-white rounded-lg shadow-md"
          >
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-600" : ""
              }`}
            >
              {task.title}
            </span>
            <button className="bg-blue-300 mr-2 p-2 rounded-lg hover:bg-blue-400">
              Editar
            </button>
            <button
              onClick={() => removeTask(task.id)}
              className="bg-red-500 mr-2 p-2 text-white rounded-lg hover:bg-red-700"
            >
              Eliminar
            </button>
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-700"
            >
              Completar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
