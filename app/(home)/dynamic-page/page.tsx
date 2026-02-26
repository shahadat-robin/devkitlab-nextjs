import PostCard from '@/components/card/post-card';
import Container from '@/components/container';
import { fetchPosts } from '@/services/fetch-posts';
import type { NextPage } from 'next';
import HeroSection from '../_common/hero-section';

export const dynamic = 'force-dynamic';

const DynamicPage: NextPage = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <HeroSection title="This is Dynamic Page" />
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

export default DynamicPage;
