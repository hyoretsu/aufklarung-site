import { styled } from '@linaria/react';

export const Styling = styled.div`
 display: flex;
 align-items: center;
 padding: 4vh 0 2vh;
 border-top: 1px solid #ddd;
 flex-direction: column;

 svg {
  width: 70%;
  margin-bottom: 1vh;

  @media (max-width: 426px) {
   width: 170%;
   transform: rotate(90deg);
   margin: 10vh 0 13vh;
  }
 }
`;
