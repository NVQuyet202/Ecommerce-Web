import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
`;

export const WrapperTextHeader = styled.span`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-item: center;
  color: #fff;
  gap: 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 13px;
  color: #fff;
`;