import React, { useEffect, useState } from "react";
import { Badge, Col, Image, Popover } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
  WrapperContentPopup,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar);
  const dispatch = useDispatch();
  const [isPending, setPending] = useState(false);

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    setPending(true);
    setName(user?.name);
    setAvatar(user?.avatar);
    setPending(false);
  }, [user?.name, user?.avatar]);

  const handleLogout = async () => {
    setPending(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    localStorage.removeItem("access_token");
    navigate("/");
    setPending(false);
  };

  const content = (
    <div style={{ padding: 0 }}>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Thông tin tài khoản
      </WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogout}>
        Đăng xuất
      </WrapperContentPopup>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        background: "rgb(26,148,255)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader gutter={15}>
        <Col span={5}>
          <WrapperTextHeader>SHOPPER</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="Tìm kiếm sản phẩm"
            enterButton
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <Loading isPending={isPending}>
            <WrapperHeaderAccount>
              {avatar !== "" ? (
                <Image
                  width={50}
                  style={{ borderRadius: "30px" }}
                  src={avatar}
                  alt="avatar"
                />
              ) : (
                <UserOutlined style={{ fontSize: "25px" }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: "pointer" }}>{name || "User"}</div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextHeaderSmall>
                    Đăng nhập/Đăng ký
                  </WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperHeaderAccount>
          </Loading>
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
    </div>
  );
};

export default HeaderComponent;
