'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface IListProps {
  list_name: string;
  list_name_encoded: string;
}

export default function List({ list_name, list_name_encoded }: IListProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/lists/${list_name_encoded}`);
  };
  return (
    <div>
      <span onClick={onClick} />
      <Link prefetch href={`/lists/${list_name_encoded}`}>
        {list_name}
      </Link>
    </div>
  );
}
