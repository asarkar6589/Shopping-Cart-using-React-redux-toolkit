import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
  // Generally we fetch data from backend.

  // Array of objects
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandeler = (options) => {
    // console.log(options);
    dispatch({
      type: "addToCart",
      payload: options,
    });
    toast.success("Added to cart");
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          id={i.id}
          price={i.price}
          imgSrc={i.imgSrc}
          handeler={addToCartHandeler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handeler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />

    <p>{name}</p>

    <h4>${price}</h4>

    <button onClick={() => handeler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

// We have given direct paranthesis, so it means that it is direct returning.

export default Home;
