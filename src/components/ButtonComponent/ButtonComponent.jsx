import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
  size,
  textButton,
  styleButton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      style={{
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.background,
      }}
      size={size}
      {...rests}
    >
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
