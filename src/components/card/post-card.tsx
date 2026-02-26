import type { IPost } from '@/interfaces/post';
import Image from 'next/image';

export default function PostCard({ title, thumbnail }: IPost) {
  return (
    <div className="shadow rounded-lg hover:bg-white-light transition-all hover:shadow-lg">
      <Image
        src={thumbnail}
        alt={title}
        height={300}
        width={500}
        className="aspect-[16/9] w-full"
      />
      <div className="p-5">
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid ipsam cupiditate
          optio excepturi rerum quaerat corrupti laborum earum debitis in ad, accusamus similique,
          labore, vitae est minima a aut.
        </p>
      </div>
    </div>
  );
}
