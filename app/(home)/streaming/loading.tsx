import Container from '@/components/container';
import Icon from '@/components/icon-store';
import Typography from '@/components/typography';

export default function Loading() {
  return (
    <section>
      <Container className="py-10 flex flex-col items-center gap-2">
        <Icon name="spinner" className="text-5xl animate-spin" />
        <Typography>Please wait...</Typography>
      </Container>
    </section>
  );
}
