"use client"
import { useTodosContext } from "@/providers/TodosProvider";
import { use } from "react";



export default function TodoList ()  {
    const { todosPromise } = useTodosContext()
    const todos = use(todosPromise)

    return (
        <ul className="mx-auto max-w-[200px] mt-8 text-center">
      {
        todos.map((todo: { id: number | undefined, title: string; }) => (
          <li key={todo.id} onClick={() => console.log('clicked listitem')}>
            {todo.title}
          </li>
        ))
      }
      </ul>
    )

}
