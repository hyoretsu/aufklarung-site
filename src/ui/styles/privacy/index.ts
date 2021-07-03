import { styled } from '@linaria/react';

export const Styling = styled.div`
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 @media (max-width: 426px) {
  padding: 2vh 4vw 3vh 4vw;

  p {
   font-size: 1.2em;
   text-align: unset;
  }
 }
`;
