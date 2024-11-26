import BookItemSkeleton from "./book-item-skeleton";

export default function BookListSkeleton({ count }: { count: number }) {
  return (
    // 길이가 count인 배열 생성
    new Array(count)
      // 생성된 배열의 모든 요소를 0으로 초기화
      .fill(0)
      // 배열의 각 요소를 반복하면서 JSX 요소 반환
      // _ -> 첫번째 매개변수는 사용하지 않을 것임
      .map((_, idx) => <BookItemSkeleton key={`book-item-skeleton-${idx}`} />)
  );
}
