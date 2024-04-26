import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
// import { Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

// const { Search } = Input;

const HeaderComponent = () => {
  return (
    <div>
      <>
        <WrapperHeader gutter={15}>
          <Col span={5}>
            <WrapperTextHeader>SHOPPER</WrapperTextHeader>
          </Col>
          <Col span={13}>
            <ButtonInputSearch
              size="large"
              textButton="Tìm kiếm"
              placeholder="Tìm kiếm sản phẩm"
              enterButton
            />
          </Col>
          <Col span={6} style={{ display: "flex", gap: "20px" }}>
            <WrapperHeaderAccount>
              <UserOutlined style={{ fontSize: "25px" }} />
              <div>
                <WrapperTextHeaderSmall>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            </WrapperHeaderAccount>
            <div>
              <div>
                <Badge count={4} size="small">
                  <ShoppingCartOutlined
                    style={{ fontSize: "27px", color: "#fff" }}
                  />
                </Badge>
                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
              </div>
            </div>
          </Col>
        </WrapperHeader>
      </>
    </div>
  );
};

export default HeaderComponent;
