import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
import React from "react";

const ProductDetailPage = () => {
  return (
    <div
      style={{
        padding: "120px 120px",
        background: "#efefef",
        height: "1000px",
      }}
    >
      <h5 style={{ margin: "5px" }}>Trang chủ</h5>
      <ProductDetailComponent />
    </div>
  );
};

export default ProductDetailPage;
