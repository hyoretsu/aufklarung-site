import { styled } from '@linaria/react';

export const Styling = styled.div`
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 2vh 4vw 3vh;
 }

 section {
  & + section {
   margin-top: 2vh;
  }

  h4 {
   font-variant: small-caps;
   color: #f70;
  }

  div {
   @media (min-width: 427px) {
    line-height: 1.7;
   }

   @media (max-width: 426px) {
    & + div {
     margin-top: 2vh;
    }
   }

   p {
    display: inline;
   }
  }
 }
`;
