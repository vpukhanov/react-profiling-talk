"use client";

import React, { useState, useMemo } from "react";
import secretAlgorithm from "@/lib/algorithm";

type Task = {
  id: number;
  title: string;
};

function TaskList({ tasks }: { tasks: Task[] }) {
  secretAlgorithm();

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white p-3 rounded shadow">
          {task.title}
        </li>
      ))}
    </ul>
  );
}

function Statistics({
  taskCount,
  tags,
}: {
  taskCount: number;
  tags: string[];
}) {
  const score = secretAlgorithm();

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold">Statistics</h3>
      <p>Tasks: {taskCount}</p>
      <p>Complexity Score: {score.toFixed(2)}</p>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
}

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal" },
    { id: 2, title: "Review code changes" },
    { id: 3, title: "Prepare presentation" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTaskTitle }]);
      setNewTaskTitle("");
    }
  };

  const taskCount = useMemo(() => tasks.length, [tasks]);
  const tags = ["Cool", "Fresh"];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="p-2 border rounded mr-2 text-black"
            placeholder="New task title"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
        <TaskList tasks={tasks} />
        <div className="mt-6">
          <Statistics taskCount={taskCount} tags={tags} />
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
