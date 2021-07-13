import { styled } from '@linaria/react';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 80vh;

 svg {
  color: #f00;
  width: auto;
  height: 20%;
 }

 span {
  font-size: 2em;
 }
`;

export default Container;
