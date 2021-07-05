import { styled } from '@linaria/react';

export const Styling = styled.div`
 margin: 1vh 3vw 2vh 2vw;

 @media (max-width: 426px) {
  padding: 2vh 5vw 3vh 4vw;
 }

 h2 {
  color: #f70;
 }

 > p {
  text-indent: 2em;
  margin-top: 0.5vh;
 }

 ol {
  margin-top: 2vh;
  margin-left: 1vw;

  li {
   p {
    display: inline;
   }
  }
 }
`;
