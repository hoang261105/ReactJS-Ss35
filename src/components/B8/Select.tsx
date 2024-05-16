import { useState } from "react";

export default function Select() {
  const [select, setSelect] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <p>Thành phố: {select}</p>
      <select name="" id="" onChange={handleChange}>
        <option value="">Chọn thành phố</option>
        <option value="Quy Nhơn">Quy Nhơn</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Pleiku">Pleiku</option>
        <option value="Buôn Ma Thuột">Buôn Ma Thuột</option>
      </select>
    </div>
  );
}
