import { useState } from "react";

export default function B6() {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={handleCount}>Click để tăng số lần click</button>
    </div>
  );
}
