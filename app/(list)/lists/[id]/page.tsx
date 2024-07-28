import ListInfo, { getList } from '../../../../components/list-info';

interface IParams {
  params: { list_name_encoded: string };
}

export async function generateMetadata({
  params: { list_name_encoded },
}: IParams) {
  const movie = await getList(list_name_encoded);
  return {
    list_name: movie.list_name,
  };
}

export default async function ListDetailPage({
  params: { list_name_encoded },
}: IParams) {
  return (
    <div>
      <ListInfo list_name_encoded={list_name_encoded} />
    </div>
  );
}
