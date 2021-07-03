import { styled } from '@linaria/react';

export const Container = styled.article`
 > span {
  display: block;
  font-size: 0.9em;
  font-weight: 700;
  margin: 2vh auto 2vh 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
   margin-right: 4vw;
  }
 }

 > strong {
  font-size: 1.4em;
  font-weight: 700;
  font-variant: small-caps;
  color: #0007;

  margin: 1vh auto 0 2vw;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }

 @media (max-width: 426px) {
  p {
   text-align: unset;
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
  width: auto;
  max-width: 100%;
  max-height: 85vh;
 }

 span {
  font-size: 1em;
  color: #000;
  margin-top: 2vh;

  & + span {
   margin-bottom: 2vh;
  }

  strong {
   color: #777;
  }
 }
`;

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 padding: 1vh 2vw 2vh;

 &:first-of-type {
  border-bottom: 1px solid #ddd;
 }

 @media (max-width: 426px) {
  padding: 1vh 4vw 2vh;

  &:last-of-type {
   padding-bottom: 3vh;
  }
 }

 > p {
  font-variant: small-caps;
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

  p {
   flex: 1;
  }

  span {
   color: #0007;

   @media (max-width: 426px) {
    margin-left: 2vw;
   }
  }
 }

 button {
  display: flex;
  align-self: flex-start;
  background: #479;
  color: #fff;

  padding: 1vh 1vw;
  border-radius: 3px;

  @media (max-width: 426px) {
   padding: 1vh 4vw;
  }

  svg {
   margin-right: 0.5vw;
  }

  &:hover {
   background: #f70;
  }
 }
`;
