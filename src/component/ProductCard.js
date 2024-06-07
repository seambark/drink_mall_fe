import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../utils/number";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    // 상품 디테일 페이지로 가기
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => showProduct(data?._id)}>
      <img src={data?.image} alt="image" />
      <div>{data?.name}</div>
      <div>₩ {currencyFormat(data?.price)}</div>
    </div>
  );
};

export default ProductCard;
