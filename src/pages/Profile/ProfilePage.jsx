import React, { useEffect, useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
  WrapperUploadFile,
} from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import * as Message from "../../components/Message/Message";
import { UploadOutlined } from "@ant-design/icons";
import { useMutationHook } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { updateUser } from "../../redux/slides/userSlide";
import { Button, Image, Upload } from "antd";
import { getBase64 } from "../../untils";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    handleSetData();
  }, [user]);

  const hanldeGetDetailsUser = async (id, token) => {
    let res = await UserService.getDetailsUser(id, token);
    if (res.status !== "ERR") {
      dispatch(updateUser({ ...res?.data, access_token: token }));
    }
  };

  const handleSetData = () => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  };

  const handleOnchangeName = (value) => {
    setName(value);
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePhone = (value) => {
    setPhone(value);
  };

  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = async () => {
    let data = {
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    };
    setPending(true);
    const res = await UserService.updateUserService(data);
    if (res && res.status === "OK") {
      Message.success("Update Succeed");
      hanldeGetDetailsUser(user?.id, user?.access_token);
      setPending(false);
    } else {
      Message.error("Update Error");
      setPending(false);
    }
  };

  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <Loading isPending={isPending}>
        <WrapperContentProfile>
          <WrapperInput>
            <WrapperLabel htmlFor="name">Tên</WrapperLabel>
            <InputFormComponent
              id="name"
              style={{ marginBottom: "10px", width: "300px" }}
              onChange={handleOnchangeName}
              value={name}
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
          </WrapperInput>

          <WrapperInput>
            <WrapperLabel htmlFor="phone">Số ĐT</WrapperLabel>
            <InputFormComponent
              id="phone"
              style={{ marginBottom: "10px", width: "300px" }}
              onChange={handleOnchangePhone}
              value={phone}
            />
          </WrapperInput>

          <WrapperInput>
            <WrapperLabel htmlFor="address">Địa chỉ</WrapperLabel>
            <InputFormComponent
              id="address"
              style={{ marginBottom: "10px", width: "300px" }}
              onChange={handleOnchangeAddress}
              value={address}
            />
          </WrapperInput>

          <WrapperInput>
            <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
              <Button icon={<UploadOutlined />}>Tải lên</Button>
            </WrapperUploadFile>
            {avatar !== "" ? (
              <Image
                width={70}
                style={{ borderRadius: "30px" }}
                src={avatar}
                alt="avatar"
              />
            ) : (
              <></>
            )}
          </WrapperInput>
          <WrapperInput style={{ margin: "0 auto" }}>
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
      </Loading>
    </div>
  );
};

export default ProfilePage;
