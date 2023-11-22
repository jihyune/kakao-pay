import { useState } from "react";
import { dummyData } from "../constant";
import { approvePayAxios } from "../api/axios";
const ApprovalPage = () => {
  const pgToken = new URL(window.location.href).searchParams.get("pg_token");

  const [approvedData, approve] = useState();
  const approvePay = async () => {
    const tid = localStorage.getItem("tid");
    const partner_user_id = localStorage.getItem("partner_user_id");

    if (!tid || !partner_user_id) return;
    if (!pgToken) return;

    const approvePayData = {
      ...dummyData,
      tid,
      partner_user_id: partner_user_id,
      pg_token: pgToken,
    };
    const returnedData = await approvePayAxios(approvePayData);
    approve(returnedData);
  };

  return (
    <>
      {!approvedData ? (
        <button onClick={approvePay}>결제완료</button>
      ) : (
        <div>
          <p>결제가 완료되었습니다.</p>
          <p>
            결제완료시각:
            {approvedData.approved_at.toString()}
          </p>
          <p>
            상품명:
            {approvedData.item_name}
          </p>
          <p>
            결제금액:
            {approvedData.amount.total}
          </p>
          <p>결제고유번호:{approvedData.tid}</p>
        </div>
      )}
    </>
  );
};

export default ApprovalPage;
