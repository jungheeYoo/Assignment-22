import ListInfo, { getList } from '../../../../components/list-info';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getList(id);
  return {
    list_name: movie.list_name,
  };
}

export default async function ListDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <ListInfo list_name_encoded={id} />
    </div>
  );
}
