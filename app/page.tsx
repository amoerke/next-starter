import { getData } from '@/lib/actions'
import TodoList from './components/todo-list';
import { Suspense } from 'react';

export default function Home() {
  const todosPromise = getData()

  return (
    <>
      <h1 className="text-3xl text-center mt-6 font-bold">Stream, Suspend and use-Hook</h1>
      <Suspense fallback={<p className='text-2xl font-bold text-center'>Loading...</p>  }>
       <TodoList />
      </Suspense>
    </>
  );
}
