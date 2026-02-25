import type { NextPage } from 'next';
import AnotherSection from './_common/another-section';
import HeroSection from './_common/landing-hero-section';

const HomePage: NextPage = () => (
  <>
    <HeroSection />
    <AnotherSection />
    <AnotherSection />
    <AnotherSection />
  </>
);

export default HomePage;
