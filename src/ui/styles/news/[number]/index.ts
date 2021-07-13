import { styled } from '@linaria/react';

export const Styling = styled.div<PathnameProp>`
 margin: 3vh 2vw 2vh;

 @media (max-width: 426px) {
  margin: 2vh 4vw 3vw;
 }

 > h2 {
  font-variant: small-caps;
  font-weight: 600;
  font-stretch: 110%;
  color: #f70;
 }

 div {
  display: flex;
  align-items: center;
  color: #0007;

  margin: 2vh 0;

  svg {
   height: 18px;
   width: auto;
   color: #ddd;

   margin-right: ${props => (props.pathname.includes('/news') ? '1%' : '2%')};
  }
 }

 p {
  font-size: 0.9em;
  line-height: 1.7;
  text-indent: 2em;
 }
`;
