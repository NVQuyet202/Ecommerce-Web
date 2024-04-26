import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images//imagesmall.webp";
import {
  WrapperAddressProduct,
  WrapperImageSmall,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => {};

  return (
    <div>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          width: "auto",
          borderRadius: "4px",
        }}
      >
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image src={imageProduct} alt="image product" preview={false} />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4}>
              <Image
                src={imageProductSmall}
                alt="image product small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperImageSmall
                src={imageProductSmall}
                alt="image product small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperImageSmall
                src={imageProductSmall}
                alt="image product small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperImageSmall
                src={imageProductSmall}
                alt="image product small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperImageSmall
                src={imageProductSmall}
                alt="image product small"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={12} style={{ paddingLeft: "20px" }}>
          <WrapperStyleNameProduct>
            Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90
          </WrapperStyleNameProduct>
          <div>
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "12px", color: "rgb(253,216,54)" }}
            />
            <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">Q. 1, P.Bến Nghé, Hồ Chí Minh</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: "10px 0 20px",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ marginBottom: "10px" }}>Số Lượng</div>
            <WrapperQualityProduct>
              <button style={{ border: "none", background: "transparent" }}>
                <MinusOutlined style={{ color: "#ddd", fontSize: "15px" }} />
              </button>

              <InputNumber
                className="input-number"
                defaultValue={3}
                onChange={onChange}
                size="small"
              />
              <button style={{ border: "none", background: "transparent" }}>
                <PlusOutlined style={{ color: "#ddd", fontSize: "15px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <ButtonComponent
              size={40}
              styleButton={{
                color: "white",
                background: "rgb(255,57,69)",
                height: "48px",
                width: "220px",
                border: "none",
              }}
              textButton={"Chọn mua"}
            />
            <ButtonComponent
              size={40}
              styleButton={{
                color: "rgb(13,92,182)",
                background: "#fff",
                height: "48px",
                width: "220px",
                border: "1px solid rgb(13,92,182)",
              }}
              textButton={"Mua trả sau"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
