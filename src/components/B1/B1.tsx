import { useState } from "react";

export default function B1() {
  const [name, setNmae] = useState<string>("Nguyễn Huy Hoàng");
  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}
