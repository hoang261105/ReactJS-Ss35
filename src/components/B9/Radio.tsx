import { useState } from "react";

export default function Radio() {
  const [select, setSelect] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <p>Giới tính: {select}</p>
      <input
        type="radio"
        name="gender"
        value="Nam"
        checked={select === "Nam"}
        onChange={handleChange}
      />
      Nam
      <input
        type="radio"
        name="gender"
        value="Nữ"
        checked={select === "Nữ"}
        onChange={handleChange}
      />
      Nữ
      <input
        type="radio"
        name="gender"
        value="Khác"
        checked={select === "Khác"}
        onChange={handleChange}
      />
      Khác
    </div>
  );
}
