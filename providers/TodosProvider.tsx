import { ReactNode, createContext, useContext } from "react";


// Simple Todo Type Construct
export type Todo = {
    id: number;
    title: string;
}

// Type to feed the ContextProvider
type TodosContextType = {
    todosPromise: Promise<Todo[]>;
}

// Initiate the ContextProvider
const TodosProviderContext = createContext<TodosContextType | null>(null)

// Build the Context Provider Wrapper Compontent
export default function TodosProvider ({
    children,
    todosPromise
}: {
    children: ReactNode,
    todosPromise: Promise<Todo[]>
})  {
    return (
    <TodosProviderContext.Provider value={{ todosPromise }}>
        {
            children
        }
    </TodosProviderContext.Provider>
    )
}

// Custom hook to use the TodosContext
export const useTodosContext = () => {
    const context = useContext(TodosProviderContext)
    if(context === undefined){
        throw new Error('useTodosContext must be used within TodosContextProvider')
    }

    return context;
}