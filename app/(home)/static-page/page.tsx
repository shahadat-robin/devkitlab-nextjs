import TodoCard from '@/components/card/to-do-card';
import Container from '@/components/container';
import { fetchTodos } from '@/services/fetch-todos';
import type { NextPage } from 'next';
import HeroSection from '../_common/hero-section';

const StaticPage: NextPage = async () => {
  const todos = await fetchTodos();

  return (
    <>
      <HeroSection title="This is Static Page" />
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

export default StaticPage;
