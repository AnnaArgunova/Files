import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 30px;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: ${props => props.active ? "bold" : "normal"};
`;