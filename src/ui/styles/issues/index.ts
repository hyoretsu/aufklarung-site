import { styled } from '@linaria/react';

export const Section = styled.section`
 display: flex;
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 @media (max-width: 426px) {
  flex-direction: column;
  align-items: center;
  padding: 2vh 4vw;
 }

 a {
  img {
   max-height: 15vw;

   @media (max-width: 426px) {
    max-height: 100%;
    max-width: 100%;
   }
  }
 }

 div {
  max-width: 78%;
  margin-left: 2vw;

  span {
   color: #0007;
  }

  p {
   font-size: 0.9em;
   margin-top: 2vh;
  }
 }
`;
