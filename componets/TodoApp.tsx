import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { addTodo, getAllTodos } from "@/utils/supabeseFunction";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };

    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Todoの追加
    await addTodo(title);
    setTitle("");

    const todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3>Supabese Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">
          Add
        </button>
      </form>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoApp;
