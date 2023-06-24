import React, { useEffect } from "react";
import { Header } from "../common/Header";
import "../../styles/cart.css";
import watch from "../../assets/watch.png";
import rating from "../../assets/ratings.svg";
import game from "../../assets/game.png";
import headphone from "../../assets/headphone.png";
import shoe from "../../assets/shoe.png";
import watch2 from "../../assets/watch-2.png";
import earphone from "../../assets/earphone.png";
import mouse from "../../assets/mouse.png";
import fridge from "../../assets/fridge.png";
import tShirt from "../../assets/t-shirt.png";
import playStation from "../../assets/playstation.png";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCart } from "../../actions/cartActions";

export const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.getCart);

  const { removedProduct } = useSelector((state) => state.removeCart);

  console.log("removed", removedProduct);

  useEffect(() => {
    dispatch(getCart());
  }, [removedProduct]);

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  const images = [
    {
      id: 1,
      name: "Fitness and activity Tracker",
      price: "$33.3",
      imageUrl: watch,
    },
    {
      id: 2,
      name: "Xbox White Joystick",
      price: "$98.4",
      imageUrl: game,
    },
    {
      id: 3,
      name: "Super Boost Headphones",
      price: "$33.3",
      imageUrl: headphone,
    },
    {
      id: 4,
      name: "X-Ray 2 Square PACK",
      price: "$33.3",
      imageUrl: shoe,
    },
    {
      id: 5,
      name: "AX1326 Automatic Analog",
      price: "$33.3",
      imageUrl: watch2,
    },
    {
      id: 6,
      name: "Ice White Airpods",
      price: "$521.3",
      imageUrl: earphone,
    },
    {
      id: 7,
      name: "Hazor Mouse Gaming",
      price: "$21.3",
      imageUrl: mouse,
    },
    {
      id: 8,
      name: "LG 260 L 3 Star Frost",
      price: "$333.3",
      imageUrl: fridge,
    },
    {
      id: 9,
      name: "Levi's Men's Printed T-Shirt",
      price: "$33.3",
      imageUrl: tShirt,
    },
    {
      id: 10,
      name: "SONY PLAYSTATION 5",
      price: "$322.3",
      imageUrl: playStation,
    },
  ];

  return (
    <>
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-products">
          {cart?.length ? (
            cart.map((item, index) => {
              return (
                <div className="item" key={item?._id}>
                  <img src={item && images[index].imageUrl} alt="" />
                  <div>
                    <p>{item?.name}</p>
                    <p>${item?.price}</p>
                    <img src={rating} alt="" />
                    <button
                      className="addcart-btn"
                      onClick={() => removeFromCart(item?.productId)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
