import { API_URL_INFO } from '../app/contants';

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
    <div>
      {list.books.map((book) => (
        <div key={book.list_name_encoded}>
          {book.book_image ? (
            <img src={book.book_image} alt={book.title} />
          ) : (
            <p>No image available</p>
          )}
        </div>
      ))}
    </div>
  );
}
