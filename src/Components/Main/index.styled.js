import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-areas:' files sort';


  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:'sort' 'files';
  }
`;

export const Files = styled.div`
  grid-area: files;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 16px;

  @media all and (max-width: 768px) {
    text-align: center;

  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100px;
  height: 200px;

  margin: 0 10px;

`;

export const ItemImage = styled.div`
  border: solid 1px grey;
  border-radius: 5px;

  width: 40px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemTitle = styled.p`
  font-size: 14px;
`;