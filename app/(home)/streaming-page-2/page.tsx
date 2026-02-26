import TodoCard from '@/components/card/to-do-card';
import Container from '@/components/container';
import { fetchTodos } from '@/services/fetch-todos';
import type { NextPage } from 'next';
import HeroSection from '../_common/hero-section';

const StreamingPage2: NextPage = async () => {
  const todos = await fetchTodos();

  return (
    <>
      <HeroSection title="This is Streaming Page 2" />
      <section className="py-10">
        <Container className="grid grid-cols-2 gap-5">
          {todos.map((todo) => (
            <TodoCard key={todo.id} title={todo.title} />
          ))}
        </Container>
      </section>
    </>
  );
};

export default StreamingPage2;
