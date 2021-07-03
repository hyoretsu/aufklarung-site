import { styled } from '@linaria/react';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;

 svg {
  color: #f00;
  width: auto;
  height: 18%;
 }

 span {
  font-size: 1.8em;
 }
`;

export default Container;
