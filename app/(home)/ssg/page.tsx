import PostCard from '@/components/card/post-card';
import Container from '@/components/container';
import { fetchPostsHeavy } from '@/services/fetch-posts';
import type { NextPage } from 'next';
import HeroSection from '../_common/hero-section';

const SSGPage: NextPage = async () => {
  const posts = await fetchPostsHeavy();

  return (
    <>
      <HeroSection title="This is Static Page" />
      <section className="py-10">
        <Container className="grid grid-cols-2 gap-5">
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </Container>
      </section>
    </>
  );
};

export default SSGPage;
