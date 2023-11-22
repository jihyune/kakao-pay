import { useState } from "react";
import { dummyData } from "../../constant";

export const Form = ({ readyPay }) => {
  const [formData, setFormData] = useState({
    partner_user_id: "",
    quantity: 0,
  });

  const handleSubmit = () => {
    const readyPayData = {
      ...formData,
      ...dummyData,
      total_amount: formData.quantity * dummyData.price,
    };

    readyPay(readyPayData);
  };
  return (
    <>
      <div>상품이름:{dummyData?.item_name}</div>
      <div>상품가격:{dummyData?.price}</div>
      <div>
        <p>이름</p>
        <input
          placeholder="Enter your name ...."
          id="partner_user_id"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>
      <div>
        <p>수량:</p>
        <input
          placeholder="amount"
          type="number"
          id="quantity"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>
      <div>
        <button onClick={handleSubmit}>kakao pay</button>
      </div>
    </>
  );
};
