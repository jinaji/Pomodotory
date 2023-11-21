import { useState } from "react";
import { TodoForm } from "./TodoForm";

export interface Todo {
  text: string;
  complete: boolean;
  id: number;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);
  return (
    <div className="bg-green-100 w-[30%] mx-auto col-span-1">
      <TodoForm todo={todos} setTodos={setTodos} />
    </div>
  );
};
