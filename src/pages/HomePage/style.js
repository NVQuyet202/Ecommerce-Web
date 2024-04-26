import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 1px solid;
  height: 44px;
`;

export const WrapperButton = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182) !important;
    span {
      color: #fff;
    }
  }
  width: 100%;
  align-item: center;
`;

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
  flex-wrap: wrap;
`;
