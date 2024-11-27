"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
// 에러 발생시 에러 컴포넌트에 자바스크립트 에러 타입의 에러 객체를 props로 에러 컴포넌트에게 전달해줌
export default function Error({
  error,
  // reset: 에러 발생한 페이지를 복구하기 위해 다시한번 컴포넌트를 렌더링 시켜보는 기능을 가진 함수

  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴
            reset(); // 에러 상태를 초기화, 컴포넌트를 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
