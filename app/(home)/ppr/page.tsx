import PostCard from '@/components/card/post-card';
import Container from '@/components/container';
import Loader from '@/components/loader';
import { fetchPostsHeavy, fetchPostsWithoutCacheHeavy } from '@/services/fetch-posts';
import type { NextPage } from 'next';
import { Suspense } from 'react';
import HeroSection from '../_common/hero-section';

export const experimental_ppr = true;

const ComponentStreamingPage: NextPage = () => {
  return (
    <>
      <HeroSection title="This is PPR example Page" />
      <Suspense fallback={<Loader />}>
        <AsyncDynamicFetch />
      </Suspense>

      <Suspense fallback="Loading...">
        <AsyncStaticFetch />
      </Suspense>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil fuga laudantium
        labore blanditiis nam consectetur, officiis eius numquam ea accusamus doloribus
        necessitatibus ipsa cum atque voluptatibus quod minima fugiat!
      </p>
    </>
  );
};

async function AsyncDynamicFetch() {
  const posts = await fetchPostsWithoutCacheHeavy();

  return (
    <section className="py-10">
      <Container className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </Container>
    </section>
  );
}

async function AsyncStaticFetch() {
  const posts = await fetchPostsHeavy();

  return (
    <section className="py-10">
      <Container className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </Container>
    </section>
  );
}

export default ComponentStreamingPage;
