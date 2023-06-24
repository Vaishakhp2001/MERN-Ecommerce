import React, { useEffect } from "react";
import carousel from "../../assets/Rectangle 9.png";
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
import "../../styles/home.css";
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => {
    return state.getProducts.products;
  });

  const user = useSelector((state) => {
    return state.userLogin.login;
  });

  const { addedProduct } = useSelector((state) => {
    return state.addToCart;
  });

  console.log("products", products);

  useEffect(() => {
    dispatch(getProducts());
  }, [addedProduct]);

  const addToCart = (productId) => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    } else {
      console.log("addto cart>>");
      dispatch(addToCart(productId));
    }
  };

  return (
    <>
      <div className="carousel">
        <img src={carousel} alt="" />
        <h2>
          From students to senior citizens <br /> this web portal of <br />{" "}
          <span>
            "Products and Classifieds” <br />{" "}
          </span>{" "}
          provides it all
        </h2>
      </div>
      <div className="best-deals">
        <h5>Best Deals</h5>
        <div className="products">
          {products?.length &&
            products.map((item, index) => {
              return (
                <>
                  <ProductCard item={item} index={index} />
                </>
              );
            })}
        </div>
      </div>
      <div className="newsletter">
        <div className="row">
          <div className="col-md-7 ">
            <svg
              width="116"
              height="102"
              viewBox="0 0 116 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.2222 89.25C27.0667 89.25 21.9111 84.7875 19.3333 82.875C6.44444 73.95 2.57778 70.7625 0 68.85V95.625C0 99.1452 2.8859 102 6.44444 102H58C61.5585 102 64.4444 99.1452 64.4444 95.625V68.85C61.8667 70.7625 58 73.95 45.1111 82.875C42.5333 84.7875 37.3778 89.25 32.2222 89.25ZM58 51H6.44444C2.8859 51 0 53.8548 0 57.375V60.5625C5.15556 64.3875 4.51111 64.3875 23.2 77.775C25.1333 79.05 29 82.875 32.2222 82.875C35.4444 82.875 39.3111 79.05 41.2444 78.4125C59.9333 65.025 59.2889 65.025 64.4444 61.2V57.375C64.4444 53.8548 61.5585 51 58 51ZM109.556 31.875H45.1111C41.5526 31.875 38.6667 34.7298 38.6667 38.25V44.625H58C64.6881 44.625 70.2022 49.6891 70.8305 56.1438L70.8889 56.1V82.875H109.556C113.114 82.875 116 80.0202 116 76.5V38.25C116 34.7298 113.114 31.875 109.556 31.875ZM103.111 57.375H90.2222V44.625H103.111V57.375ZM32.2222 38.25C32.2222 31.2196 38.0041 25.5 45.1111 25.5H90.2222V6.375C90.2222 2.8548 87.3363 0 83.7778 0H19.3333C15.7748 0 12.8889 2.8548 12.8889 6.375V44.625H32.2222V38.25Z"
                fill="white"
                fill-opacity="0.37"
              />
            </svg>
            <div className="text">
              <h4>Sign Up for Newsletter</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="input">
              <p>Enter your email here</p>
              <button className="subscribe">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ item, index }) => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { added } = useSelector((state) => {
    return state.addToCart;
  });

  const addCart = (productId) => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    } else {
      console.log("addto cart>>");
      dispatch(addToCart(productId));
    }
  };

  return (
    <div className="item" key={item?._id}>
      <img src={item && images[index].imageUrl} alt="" />
      <div>
        <p>{item?.name}</p>
        <p>${item?.price}</p>
        <p>{item.quantity}</p>
        <img src={rating} alt="" />
        <button className="addcart-btn" onClick={() => addCart(item?._id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
