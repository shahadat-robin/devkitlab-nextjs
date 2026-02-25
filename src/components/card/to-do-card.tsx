interface IProps {
  title: string;
}

export default function TodoCard({ title }: IProps) {
  return (
    <div className="shadow p-5 rounded-lg hover:bg-white-light transition-all hover:shadow-lg">
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid ipsam cupiditate optio
        excepturi rerum quaerat corrupti laborum earum debitis in ad, accusamus similique, labore,
        vitae est minima a aut.
      </p>
    </div>
  );
}
