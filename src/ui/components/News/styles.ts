import { styled } from '@linaria/react';

export const Section = styled.section<PathnameProp>`
 display: flex;
 flex-direction: column;
 flex: 1;

 border-top: ${props => (props.pathname === '/news' ? '1px solid #ddd' : '0')};
 border-bottom: ${props => (props.pathname === '/news' ? '0' : '1px solid #ddd')};
 font-size: 0.9em;

 padding: 2vh 2vw;

 @media (max-width: 426px) {
  padding: 2vh 4vw;

  &:last-of-type {
   padding-bottom: 3vh;
  }
 }

 a {
  color: #f70;

  &:hover {
   color: #479;
  }
 }

 h3 {
  a {
   font-variant: small-caps;
   font-stretch: 110%;
  }
 }

 div {
  display: flex;
  align-items: center;

  margin: 0.7vw 0;

  svg {
   height: 2.8vh;
   width: auto;
   color: #ddd;

   margin-right: ${props => (props.pathname === '/news' ? '1%' : '2%')};
  }
 }

 > a {
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 1%;

  svg {
   margin: 1%;
  }
 }
`;
