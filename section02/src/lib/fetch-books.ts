import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  // q? -> 선택적 프로퍼티, 전달받지 않아도 되는 프로퍼티
  let url = "http://localhost:12345/book";

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
