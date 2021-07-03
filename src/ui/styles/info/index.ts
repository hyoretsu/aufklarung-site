import { styled } from '@linaria/react';

export const Styling = styled.div`
 > h2 {
  font-variant: small-caps;
  color: #f70;
  margin: 2vh 2vw 0;

  @media (max-width: 426px) {
   margin: 2vh 4vw 0;
  }
 }
`;

export const Section = styled.section`
 margin: 2vh 2vw 0;

 @media (max-width: 426px) {
  margin: 2vh 4vw 0;
 }

 &:last-of-type {
  margin-bottom: 2vh;

  @media (max-width: 426px) {
   margin-bottom: 3vh;
  }
 }

 h3 {
  font-variant: small-caps;
  color: #f70;
  margin-bottom: 1vh;
 }

 p {
  font-size: 0.9em;
 }
`;
