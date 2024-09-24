import React, { useState } from 'react';

function Counter() {
  // useState로 count라는 상태와 그 상태를 업데이트할 setCount 함수를 선언
  const [count, setCount] = useState(0); // 초기값은 0

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}

export default Counter;
