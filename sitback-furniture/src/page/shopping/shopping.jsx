import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../components/cards/product-card/product-card";
import Loader from "../../components/loader/loader";
import SideMenu from "../../components/side-menu-section/side-menu";
import styles from "./shopping.module.scss";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shopping = () => {
  const navigate = useNavigate();

  const { categoryId } = useParams();
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sideMenuContainer, setSideMenuContainer] = useState();
  const [cartData, setcartData] = useState([]);
  const [wishListData, setWishListData] = useState([]);

  if (localStorage.getItem("totalAmount") == undefined) {
    localStorage.setItem("totalAmount", JSON.stringify(0));
  }

  const onPlaceOrder = () => {
    if (JSON.parse(localStorage.getItem("totalAmount")) > 0) {
      localStorage.removeItem("cartData");
      localStorage.removeItem("totalAmount");
      if (!wishListData.length > 0) {
        localStorage.removeItem("isSideMenuOpen", "false");
      }
      navigate("/shopping/order", { state: cartData, replace : true });
    } else {
      toast("Add some items to cart");
    }
  };

  const addToCartAndWishListData = (
    value,
    productName,
    price,
    img,
    description,
    updateTo
  ) => {
    if (value === "cart") {
      const totalAmount = localStorage?.getItem("totalAmount")
        ? JSON.parse(localStorage.getItem("totalAmount"))
        : 0;

      const cartIndex = cartData.findIndex(
        ({ product }) => product === productName
      );
      if (cartIndex === -1) {
        cartData.push({
          product: productName,
          productPrice: price,
          quantity: 1,
          photo: img,
          details: description,
        });
        localStorage.setItem(
          "totalAmount",
          JSON.stringify(totalAmount + parseInt(price))
        );
        const upcart = [...cartData];
        setcartData(upcart);
        localStorage.setItem("selectedTab", "myCart");
      } else {
        if (updateTo === "increment") {
          localStorage.setItem(
            "totalAmount",
            JSON.stringify(totalAmount + parseInt(price))
          );
          cartData[cartIndex].quantity += 1;
          localStorage.setItem("selectedTab", "myCart");
        } else if (updateTo === "decrement") {
          if (cartData[cartIndex].quantity === 1) {
            localStorage.setItem(
              "totalAmount",
              JSON.stringify(totalAmount - parseInt(price))
            );
            cartData.splice(cartIndex, 1);
          } else {
            localStorage.setItem(
              "totalAmount",
              JSON.stringify(totalAmount - parseInt(price))
            );
            cartData[cartIndex].quantity -= 1;
          }
        }
        const upcart = [...cartData];
        setcartData(upcart);
      }
      localStorage.setItem("cartData", JSON.stringify(cartData));
    } else if (value === "wishList") {
      const wishListIndex = wishListData.findIndex(
        ({ product }) => product === productName
      );
      if (wishListIndex === -1) {
        wishListData.push({
          product: productName,
          productPrice: price,
          photo: img,
          details: description,
        });

        const upcart = [...wishListData];
        setWishListData(upcart);
        localStorage.setItem("selectedTab", "myWishList");
      } else {
        wishListData.splice(wishListIndex, 1);
        const upcart = [...wishListData];
        setWishListData(upcart);
      }
      localStorage.setItem("wishListData", JSON.stringify(wishListData));
    }
    const sideMenuOpen = cartData.length > 0 || wishListData.length > 0;
    localStorage.setItem("isSideMenuOpen", JSON.stringify(sideMenuOpen));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://jsonmockserver.vercel.app/api/shopping/furniture/products",
          {
            params: {
              category: categoryId,
            },
          }
        );
        const responseValue = res.data;
        setApiData(responseValue);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [categoryId]);

  const productResponseData = apiData.map((val, index) => (
    <ProductCard
      key={index}
      name={val.name}
      photo={val.photo}
      guarantee={val.guarantee}
      price={val.price}
      description={val.description}
      sideMenuOn={JSON.parse(localStorage.getItem("isSideMenuOpen"))}
      addToList={addToCartAndWishListData}
      page="shopping"
    />
  ));

  return (
    <main className={styles["shopping-page-wrapper"]}>
      <section className={styles["shopping-section"]}>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <div className={`${styles["card-holder"]}`}>
            {productResponseData}
          </div>
        )}
      </section>
      {JSON.parse(localStorage.getItem("isSideMenuOpen")) && (
        <SideMenu
          onOrderConfirm={onPlaceOrder}
          cartData={JSON.parse(localStorage.getItem("cartData"))}
          wishListData={JSON.parse(localStorage.getItem("wishListData"))}
          tabChange={localStorage.getItem("selectedTab")}
          totalAmount={JSON.parse(localStorage.getItem("totalAmount"))}
          onQuantityUpdate={addToCartAndWishListData}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </main>
  );
};
export default Shopping;
