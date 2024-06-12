import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../action/orderAction";
import OrderStatusCard from "../component/OrderStatusCard";
import "../style/orderStatus.style.css";

const MyPage = () => {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(orderActions.getOrder());
  }, []);

  //오더리스트 들고오기

  if (orderList?.length === 0) {
    return (
      <Container className="no-order-bod">
        <p>진행중인 주문이 없습니다.</p>
      </Container>
    );
  }
  // 오더리스트가 없다면? 주문한 상품이 없습니다 메세지 보여주기
  return (
    <Container className="status-card-container">
      {orderList?.map((item) => (
        <OrderStatusCard
          orderItem={item}
          className="status-cart-container"
          key={item._id}
        />
      ))}
    </Container>
  );
};

export default MyPage;
