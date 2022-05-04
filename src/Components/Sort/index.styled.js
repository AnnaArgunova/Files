import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: sort;
  position: relative;

  @media all and (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  cursor: pointer;
  `;

export const WrapperHidden = styled.div`
  position: absolute;
  left: 0;
  background: white;
  z-index: 10;
`;

export const TitleActive = styled(Title)`
  font-weight: bold;
  font-size: 16px;
`;
