import React from "react";

const TodoList = () => {
  return (
    <div>
      <ul className="mx-auto">
        <div className="flex bg-orange-200 rounded-md">
          <li>✅　読書</li>
          <span>✖︎</span>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
