import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function B2() {
  const [print, setPrint] = useState<Product>({
    id: 1,
    name: "Coca Cola",
    price: 20000000,
    quantity: 2,
  });
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>ID: {print.id}</p>
      <p>Name: {print.name}</p>
      <p>Price: {print.price}</p>
      <p>Quantity: {print.quantity}</p>
    </div>
  );
}
