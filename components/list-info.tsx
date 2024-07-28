import { API_URL_INFO } from '../app/contants';
import styles from '../styles/list-info.module.css';

export async function getList(list_name_encoded: string) {
  const response = await fetch(`${API_URL_INFO}?name=${list_name_encoded}`);
  const data = await response.json();
  return data.results; // 여기서 results 객체를 반환
}

export default async function ListInfo({
  list_name_encoded,
}: {
  list_name_encoded: string;
}) {
  const list = await getList(list_name_encoded);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{list.list_name}</h1>
      <ul className={styles.lists}>
        {list?.books.map((book) => {
          const firstBuyLink = book.buy_links[0];
          return (
            <div className={styles.list} key={book.primary_isbn13}>
              {book.book_image ? (
                <img src={book.book_image} alt={book.title} />
              ) : (
                <p>No image available</p>
              )}
              <p>{book.title}</p>
              <p>{book.author}</p>
              <div>
                <a
                  href={firstBuyLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy now &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
