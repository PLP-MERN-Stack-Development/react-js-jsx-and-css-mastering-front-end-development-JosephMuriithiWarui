import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
        setTasks(res.data.map(t => ({ id: t.id, text: t.title, completed: t.completed })));
        setLoading(false);
      } catch (err) {
        setError("Failed to load tasks");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add new task locally
  const addTask = () => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([newTask, ...tasks]);
    setTaskText("");
  };

  // Toggle task completed
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtered tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (loading) return <p className="text-center mt-4">Loading tasks...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      {/* Add task */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter new task"
          className="flex-grow px-3 py-2 rounded border focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 dark:text-gray-300">No tasks found.</li>
        )}
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-white dark:bg-gray-700 px-3 py-2 rounded shadow">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="accent-blue-500"
              />
              <span className={task.completed ? "line-through text-gray-500 dark:text-gray-300" : ""}>
                {task.text}
              </span>
            </div>
            <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
