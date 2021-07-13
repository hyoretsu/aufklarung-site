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
   font-stretch: 110%;
   color: #f70;
  }

  @media (min-width: 427px) {
   p {
    line-height: 1.7;
   }
  }
 }
`;
