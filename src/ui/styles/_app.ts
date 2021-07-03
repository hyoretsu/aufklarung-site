import { styled } from '@linaria/react';

export const Content = styled.div`
 display: flex;
 padding: 4vh 1vw;

 @media (max-width: 426px) {
  padding: 4vh 4vw;
 }
`;

export const Body = styled.main`
 background-color: #fff;
 flex: 1;
 min-width: 70%;
 border: 1px solid #479;
 border-radius: 0 35px;

 > img {
  position: absolute;
  bottom: -302%;
  color: #fff;
  height: 300px;
  z-index: -1;
 }
`;
