import { useState } from "react";

export default function B5() {
  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{input}</p>
    </div>
  );
}
