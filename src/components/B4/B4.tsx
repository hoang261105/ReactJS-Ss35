import React, { useState } from "react";

export default function B4() {
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  const handleClick = () => {
    setShow1(!show1);
    setShow2(!show2);
  };
  return (
    <div>
      {show1 && <p>Tiêu đề</p>}
      {show2 ? (
        <button onClick={handleClick}>Ẩn</button>
      ) : (
        <button onClick={handleClick}>Hiện</button>
      )}
    </div>
  );
}
