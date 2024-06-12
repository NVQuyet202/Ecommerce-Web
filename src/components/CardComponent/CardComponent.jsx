import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = ({ size, placeholder, bordered, style, ...rests }) => {
  return (
    <WrapperCardStyle
      hoverable
      styles={{ header: { width: "200px", height: "200px" } }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle alt="logo" src={logo} />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>

        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>1.000.000đ</span>
        <WrapperPriceDiscountText>-5%</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
