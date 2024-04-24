import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = ({ size, placeholder, bordered, style, ...rests }) => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
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

        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ <WrapperPriceDiscountText>-5%</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
