import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  return (
    <div
      style={{
        padding: "0 120px",
        background: "#efefef",
      }}
    >
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>

        <Col span={19}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
        </Col>
      </Row>
      <Pagination
        // onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={100}
        style={{ textAlign: "center", marginTop: "10px" }}
      />
    </div>
  );
};

export default TypeProductPage;
