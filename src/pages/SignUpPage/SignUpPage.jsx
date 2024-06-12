import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "../SignInPage/style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imgLogo from "../../assets/images/logo-login.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHook } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as Message from "../../components/Message/Message";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mutation = useMutationHook((data) => UserService.signUpUser(data));

  const { data, isPending, isError, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess && data?.status !== "ERR") {
      Message.success();
      handleNavigateSignIn();
    } else if (isError) {
      Message.error();
    }
  }, [isSuccess, isError]);

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleSignUp = () => {
    mutation.mutate({
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Tạo tài khoản</p>
          <InputFormComponent
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            onChange={handleOnchangeEmail}
            value={email}
          />
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFormComponent
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              onChange={handleOnchangePassword}
              value={password}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
                cursor: "pointer",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFormComponent
              placeholder="Nhập lại password"
              type={isShowConfirmPassword ? "text" : "password"}
              onChange={handleOnchangeConfirmPassword}
              value={confirmPassword}
            />
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={
                !email.length || !password.length || !confirmPassword.length
              }
              onClick={handleSignUp}
              size={40}
              styleButton={{
                color: "white",
                background: "rgb(255,57,69)",
                height: "48px",
                width: "100%",
                border: "none",
                margin: "26px 0 10px",
              }}
              textButton={"Đăng Ký"}
            />
          </Loading>

          <p>
            Bạn có tài khoản chưa?
            <WrapperTextLight onClick={handleNavigateSignIn}>
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imgLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại LTTD</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
