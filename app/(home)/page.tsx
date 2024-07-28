import List from '../../components/list';
import styles from '../../styles/home.module.css';
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
    <div className={styles.container}>
      <h1 className={styles.title}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <ul className={styles.lists}>
        {lists.map((list) => (
          <li className={styles.list}>
            <List
              key={list.list_name_encoded}
              list_name_encoded={list.list_name_encoded}
              list_name={list.list_name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
