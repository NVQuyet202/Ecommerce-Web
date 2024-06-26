import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
  color: black;
  font-size: 16px;
  margin: 4px 0;
`;

export const WrapperContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 500px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;
`;

export const WrapperLabel = styled.label`
  color: #000;
  width: 50px;
  text-align: left;
  font-size: 12px;
  line-height: 30px;
  font-weight: 600;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-item: center;
  gap: 20px;
`;

export const WrapperUploadFile = styled(Upload)`
  & .ant-upload-list-item-container {
    display: none;
  }
`;
