import { useEffect, useState } from "react";
import { readyPayAxios } from "../api/axios";
import { Form } from "../components/form";

const HomePage = () => {
  const [readyData, ready] = useState();

  const readyPay = async (readyPayData) => {
    const returnedData = await readyPayAxios(readyPayData);
    ready(returnedData);
  };

  useEffect(() => {
    if (!readyData) return;

    window.open(readyData.next_redirect_pc_url);
    localStorage.setItem("tid", readyData.tid);
    localStorage.setItem("partner_user_id", readyData.partner_user_id);
  }, [readyData]);

  return (
    <div>
      {readyData ? (
        <div>
          <p>결제 진행중입니다 . . .</p>
          <button onClick={() => window.open(readyData.next_redirect_pc_url)}>
            결제 이어서 하기
          </button>
        </div>
      ) : (
        <Form readyData={readyData} readyPay={readyPay} />
      )}
    </div>
  );
};

export default HomePage;
