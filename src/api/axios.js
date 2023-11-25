import axios from "axios";
import { KAKAO_KEY } from "../constant";

export const kakaoApi = axios.create({
  baseURL: "https://kapi.kakao.com",
  headers: {
    // Host: "kapi.kakao.com",
    Authorization: `KakaoAK ${KAKAO_KEY}`,
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});
export const readyPayAxios = async (data) => {
  const {
    cid,
    partner_order_id,
    partner_user_id,
    item_name,
    quantity,
    total_amount,
    tax_free_amount,
    approval_url,
    cancel_url,
    fail_url,
  } = data;

  const path = `/v1/payment/ready?cid=${cid}&partner_order_id=${partner_order_id}&partner_user_id=${partner_user_id}&item_name=${item_name}&quantity=${quantity}&total_amount=${total_amount}&tax_free_amount=${tax_free_amount}&approval_url=${approval_url}&cancel_url=${cancel_url}&fail_url=${fail_url}`;

  return (await kakaoApi.post(path, data)).data;
};

export const approvePayAxios = async (data) => {
  const { cid, tid, partner_order_id, partner_user_id, pg_token } = data;

  const path = `/v1/payment/approve?cid=${cid}&tid=${tid}&partner_order_id=${partner_order_id}&partner_user_id=${partner_user_id}&pg_token=${pg_token}`;

  return (await kakaoApi.post(path)).data;
};
