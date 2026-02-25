import TodoCard from '@/components/card/to-do-card';
import Container from '@/components/container';
import { fetchTodos } from '@/services/fetch-todos';
import type { NextPage } from 'next';
import { Suspense } from 'react';
import HeroSection from '../_common/hero-section';

const StreamingPage: NextPage = () => {
  return (
    <>
      <HeroSection title="This is Streaming Page" />
      <Suspense fallback="Loading...">
        <AsyncFetch />
      </Suspense>
    </>
  );
};

async function AsyncFetch() {
  const todos = await fetchTodos();

  return (
    <section className="py-10">
      <Container className="grid grid-cols-2 gap-5">
        {todos.map((todo) => (
          <TodoCard key={todo.id} title={todo.title} />
        ))}
      </Container>
    </section>
  );
}

export default StreamingPage;
