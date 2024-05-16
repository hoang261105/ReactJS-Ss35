import { useState } from "react";

export default function ChangeColor() {
  const [changeColor, setChangeColor] = useState<boolean>(false);
  const handleClick = () => {
    setChangeColor(!changeColor);
  };
  return (
    <div>
      {changeColor ? (
        <p style={{ color: "red" }}>Tiêu đề văn bản</p>
      ) : (
        <p>Tiêu đề văn bản</p>
      )}

      <button onClick={handleClick}>Thay đổi màu</button>
    </div>
  );
}
