import { useEffect, useState } from "react";
import { Form } from "../components/form";

const HomePage = () => {
  const [readyData, setReadyData] = useState();

  return (
    <div>
      {readyData ? (
        <div>
          <p>결제 진행중입니다 . . .</p>
          <button onClick={() => window.open()}>
            결제 이어서 하기
          </button>
        </div>
      ) : (
        <Form readyData={readyData} readyPay={setReadyData} />
      )}
    </div>
  );
};

export default HomePage;
