import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/cards/product-card/product-card";
import Home from "../home/home";
import styles from "./order-confimation.module.scss";
import {orderData } from "../../constants/string-constant";

const OrderConfirmation = () => {

  const location = useLocation();
  const [cardVal,setCardVal] = useState();

  useEffect(() => {
    if(location.state)
    {
      const cards = location.state.map((value) => (
          <ProductCard
            photo={value.photo}
            name={value.product}
            price={value.productPrice}
            quantity={value.quantity}
            page="order"
            description={value.details}
          />
        ));
        setCardVal(cards);
    }
    else{
      const cards = (<div>{orderData.noDataMessage}</div>);
      setCardVal(cards);
    }
    return () => {
        window.history.replaceState({state:''},'');
    };
  }, []);

  return (
    <>
      <div className={styles["order-page-wrapper"]}>
        <div className={styles["heading-wrapper"]}>{orderData.heading}</div>
        <div className={styles["description-wrapper"]}>
              {orderData.thankYouMessage}
        </div>
        <div className={styles["card-holder"]}>{cardVal}</div>
      </div>
      <Home page="order" />
    </>
  );
};

export default OrderConfirmation;
