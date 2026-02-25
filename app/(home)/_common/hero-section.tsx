import Container from '@/components/container';

interface IProps {
  title: string;
}

export default function HeroSection({ title }: IProps) {
  return (
    <section className="py-10 bg-white-light text-center">
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  );
}
