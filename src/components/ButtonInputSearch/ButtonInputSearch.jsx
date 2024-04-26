import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;

  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ borderRadius: "0", backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined />}
        // bordered={false}
        styleButton={{
          color: colorButton,
          borderRadius: "0 ",
          border: "none",
          background: backgroundColorButton,
        }}
        textButton={textButton}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
