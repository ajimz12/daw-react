import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, editTask, markTaskAsCompleted } =
    useContext(TaskContext);
  return (
    <>
      <div className="p-4 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Task List</h2>
        <ul>
          {tasks.map((task) => {
            return (
              <>
                <li className="flex justify-between items-center p-2 mb-2 bg-white rounded-lg shadow-md" key={task.id}>
                  <span className={`flex-1 ${task.completed ? "line-through text-gray-600"}`}>
                    {task.title}
                  </span>
                  <button></button>
                  <button></button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
