export const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

export const APPROVAL_URL = "http://localhost:3000/approval";
export const CANCEL_URL = "http://localhost:3000/cancel";
export const FAIL_URL = "http://localhost:3000/fail";
export const CID = process.env.REACT_APP_SHOP_CODE;

export const dummyData = {
  item_name: "Elmo",
  tax_free_amount: 0,
  price: 170000,
  partner_order_id: "partner_order_id",

  approval_url: APPROVAL_URL,
  cancel_url: CANCEL_URL,
  fail_url: FAIL_URL,
  cid: CID,
};
