import React from "react";
import {
  WrapperContent,
  WrapperLabelText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((options) => {
          return <WrapperTextValue>{options}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {options.map((options) => {
              return <Checkbox value={options.value}>{options.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((options) => {
          return (
            <div style={{ display: "flex" }}>
              <Rate disabled defaultValue={options} /> &nbsp;
              <span>Từ {options} sao</span>
            </div>
          );
        });
      case "price":
        return options.map((options) => {
          return <WrapperTextPrice>{options}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["Tulanh", "TV", "May Giat"])}
      </WrapperContent>
    </>
  );
};

export default NavbarComponent;
