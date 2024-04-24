import React from "react";
import { WrapperContent, WrapperLabelText, WrapperTextValue } from "./style";
import { Checkbox } from "antd";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((options) => {
          return <WrapperTextValue>{options}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group style={{ width: "100%" }}>
            {options.map((options) => {
              return <Checkbox value={options.value}>{options.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      default:
        return {};
    }
  };
  return (
    <>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["Tulanh", "TV", "May Giat"])}
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "b", label: "C" },
        ])}
      </WrapperContent>
    </>
  );
};

export default NavbarComponent;
