import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButton, WrapperProducts, WrapperTypeProduct } from "./style";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
// import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const HomePage = () => {
  const arrProduct = ["TV", "Tu lanh", "Laptop"];
  return (
    <>
      <div style={{ width: "1270px", padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arrProduct.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{
          width: "100%",
          backgroundColor: "#efefef",
        }}
      >
        <div
          id="container"
          style={{
            width: "1270px",
            margin: " 0 auto",
            height: "1000px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButton
              textButton="Xem Thêm"
              type="outline"
              styleButton={{
                backgroundColor: "#fff",
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
