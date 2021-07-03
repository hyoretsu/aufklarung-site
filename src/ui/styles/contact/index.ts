import { styled } from '@linaria/react';

export const Styling = styled.div`
 display: flex;
 flex-direction: column;

 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 2vh 4vw 3vh;

  > section {
   p + p {
    margin-top: 1.5vh;
    line-height: 1.3;
   }
  }
 }
`;

export const Contacts = styled.div`
 display: flex;
 margin-top: 1vh;

 @media (max-width: 426px) {
  flex-direction: column;
 }
`;

export const Section = styled.section`
 @media (max-width: 426px) {
  margin-top: 1vh;

  & + section {
   margin-top: 2vh;
  }

  a {
   font-size: 0.9em;
  }
 }

 h4 {
  font-variant: small-caps;
  color: #f70;
 }

 p {
  text-align: unset;
 }

 span {
  font-weight: 700;
  color: #777;
 }

 div {
  margin-bottom: 1vh;
 }

 @media (min-width: 427px) {
  & + section {
   margin-left: 30%;
  }
 }
`;
