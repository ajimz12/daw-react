import { createContext, useState } from "react";

// Crear contexto
export const TaskContext = createContext();

// Crear provider del contexto
export const TaskProvider = ({ children }) => {
  // acciones sobre una tarea
  // - agregar
  // - eliminar
  // - editar
  // - marcar como completada
  // No olvidar que las tareas han de estar guardadas en el locaStorage (en este ejercicio)

  // hooks
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    setTask((prevTask) => [...prevTask, task]);
  };

  const deleteTask = (taskId) => {
    setTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };

  const deleteTask2 = (taskId) => {
    setTask((prevTask) => prevTask.find((task) => task.id === taskId));
  };

  const editTask = (taskId, updatedTask) => {}; // TODO

  const markTaskAsCompleted = (taskId) => {
    setTask((prevTasks) => {
      return prevTasks.map((prevTask) => {
        prevTask.id === taskId ? { ...task, completed: !task.completed } : task;
      });
    });
  };

  // funciones

  return (
    <TaskContext.Provider
      value={{ task, addTask, deleteTask, editTask, markTaskAsCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
};
