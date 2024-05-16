import React, { useState } from "react";

export default function Checkbox() {
  const [hobby, setHobby] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setHobby([...hobby, e.target.value]);
    } else {
      setHobby(hobby.filter((item) => item !== e.target.value));
    }
  };
  return (
    <div>
      <p>Sở thích: [{hobby.join(",")}]</p>
      <input type="checkbox" onChange={handleChange} value="Đi chơi" />
      Đi chơi
      <input type="checkbox" onChange={handleChange} value="Code" />
      Code
      <input type="checkbox" onChange={handleChange} value="Nhảy dây" />
      Nhảy dây
      <input type="checkbox" onChange={handleChange} value="Bơi lội" />
      Bơi lội
    </div>
  );
}
