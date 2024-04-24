import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
  const arrProduct = ["TV", "Tu lanh", "Laptop"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arrProduct.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WrapperTypeProduct>
      HomePage
    </div>
  );
};

export default HomePage;
