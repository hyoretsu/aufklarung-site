import { styled } from '@linaria/react';

export const Container = styled.footer`
 display: flex;
 flex-direction: column;
 align-items: center;
 background: #ddd;
 font-size: 0.8em;

 @media (max-width: 426px) {
  padding: 0 2vw;
 }

 p,
 strong {
  text-align: center;
  margin: 1vh 0;
 }

 > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 83%;
 }

 a {
  img {
   height: min(7vh, 50px);
   margin: 0 0.2vw;
  }
 }
`;
