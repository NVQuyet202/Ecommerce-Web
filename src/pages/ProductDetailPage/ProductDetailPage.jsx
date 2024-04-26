import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{ padding: "1px 120px", background: "#efefef", height: "1000px" }}
    >
      <h5 style={{ margin: "5px" }}>Trang chủ</h5>

      <ProductDetailComponent />
    </div>
  );
};

export default ProductDetailPage;
