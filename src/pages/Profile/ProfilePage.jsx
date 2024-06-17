import React, { useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
} from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const ProfilePage = () => {
  const [email, setEmail] = useState("");

  const handleOnchangeEmail = () => {
    setEmail("");
  };

  const handleUpdate = () => {
    setEmail("");
  };

  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <WrapperContentProfile>
        <WrapperInput>
          <WrapperLabel htmlFor="email">Email</WrapperLabel>
          <InputFormComponent
            id="email"
            style={{ marginBottom: "10px", width: "300px" }}
            onChange={handleOnchangeEmail}
            value={email}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              color: "rgb(26,148,255)",
              height: "30px",
              width: "fit-content",
              border: "1px solid rgb(26,148,255)",
              fontSize: "14px",
              fontWeight: "700",
              padding: "10px",
            }}
            textButton={"Cập nhật"}
          />
        </WrapperInput>
        <WrapperInput>
          <WrapperLabel htmlFor="email">Email</WrapperLabel>
          <InputFormComponent
            id="email"
            style={{ marginBottom: "10px", width: "300px" }}
            onChange={handleOnchangeEmail}
            value={email}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              color: "rgb(26,148,255)",
              height: "30px",
              width: "fit-content",
              border: "1px solid rgb(26,148,255)",
              fontSize: "14px",
              fontWeight: "700",
              padding: "10px",
            }}
            textButton={"Cập nhật"}
          />
        </WrapperInput>
        <WrapperInput>
          <WrapperLabel htmlFor="email">Email</WrapperLabel>
          <InputFormComponent
            id="email"
            style={{ marginBottom: "10px", width: "300px" }}
            onChange={handleOnchangeEmail}
            value={email}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              color: "rgb(26,148,255)",
              height: "30px",
              width: "fit-content",
              border: "1px solid rgb(26,148,255)",
              fontSize: "14px",
              fontWeight: "700",
              padding: "10px",
            }}
            textButton={"Cập nhật"}
          />
        </WrapperInput>
      </WrapperContentProfile>
    </div>
  );
};

export default ProfilePage;
