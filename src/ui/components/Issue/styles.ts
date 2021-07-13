import { styled } from '@linaria/react';

export const Container = styled.article`
 > span {
  display: block;
  font-size: 0.9em;
  font-weight: 700;
  margin: 2vh 2vw;

  @media (max-width: 426px) {
   margin: 2vh 4vw;
  }
 }

 > strong {
  display: block;
  margin: 1vh 2vw;

  font-size: 1.4em;
  font-weight: 600;
  font-variant: small-caps;
  color: #0007;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }
`;

export const Introduction = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 padding: 0 2vw;
 border-bottom: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 0 4vw;
 }

 img {
  max-height: 85vh;
  max-width: 100%;
 }

 > * {
  margin-bottom: 2vh;
 }

 span {
  strong {
   color: #777;
  }
 }
`;

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 padding: 0 2vw 3vh;

 &:first-of-type {
  border-bottom: 1px solid #ddd;
 }

 @media (max-width: 426px) {
  padding: 0 4vw 3vh;
 }

 > p {
  font-variant: small-caps;
  font-weight: 600;
  font-size: 1.4em;

  a {
   color: #f70;

   &:hover {
    color: #479;
   }
  }
 }

 div {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  margin: 0.5vh 0 1.5vh;

  span {
   color: #0007;

   @media (max-width: 426px) {
    max-width: 20%;
   }
  }
 }

 button {
  color: #fff;
  background: #479;
  padding: 1vh 1vw;
  margin-right: auto;
  border-radius: 4px;

  @media (max-width: 426px) {
   padding: 2vh 4vw;
   margin: auto;
  }

  svg {
   margin-right: 0.5vw;
   transform: translate(0, 10%);
  }

  &:hover {
   background: #f70;
  }
 }
`;
