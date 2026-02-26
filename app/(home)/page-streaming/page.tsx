import PostCard from '@/components/card/post-card';
import Container from '@/components/container';
import { fetchPosts } from '@/services/fetch-posts';
import type { NextPage } from 'next';
import HeroSection from '../_common/hero-section';

const StreamingPage2: NextPage = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <HeroSection title="This is Streaming Page 2" />
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

export default StreamingPage2;
