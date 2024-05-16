import React, { useState } from "react";

export default function CountText() {
  const [text, setText] = useState<string>("");
  const [countText, setCountText] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setCountText(e.target.value.length);
  };
  return (
    <div>
      <textarea onChange={handleChange}></textarea>
      <p>Số kí tự là: {countText}</p>
    </div>
  );
}
