import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ size, textButton, styleButton, ...rests }) => {
  return (
    <Button size={size} style={styleButton} {...rests}>
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
