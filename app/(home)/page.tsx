import List from '../../components/list';
import { API_URL } from '../contants';

export const metadata = {
  title: 'Home',
};

async function getLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results; // API 응답에서 results 배열을 반환
}

export default async function HomePage() {
  const lists = await getLists();

  return (
    <div>
      {lists.map((list) => (
        <List
          key={list.list_name_encoded}
          list_name_encoded={list.list_name_encoded}
          list_name={list.list_name}
        />
      ))}
    </div>
  );
}
