import { styled } from '@linaria/react';

export const Section = styled.section<PathnameProp>`
 display: flex;
 flex-direction: column;
 flex: 1;

 padding: 2vh 2vw;

 border-top: ${props => (props.pathname === '/news' ? '1px solid #ddd' : '0')};
 border-bottom: ${props => (props.pathname === '/news' ? '0' : '1px solid #ddd')};
 font-size: 0.9em;

 @media (max-width: 426px) {
  padding: 2vh 4vw;

  &:last-of-type {
   padding-bottom: 3vh;
  }

  p {
   text-align: unset;
  }
 }

 h3 {
  a {
   font-variant: small-caps;
   color: #f70;

   &:hover {
    color: #479;
   }
  }
 }

 div {
  display: flex;
  align-items: center;
  color: '#0004';

  margin: 10px 0;

  svg {
   height: 18px;
   width: auto;
   color: #ddd;

   margin-right: ${props => (props.pathname === '/news' ? '1%' : '2%')};
  }
 }

 > a {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #f70;
  margin: ${props => (props.pathname === '/news' ? '1vh' : 'auto')} auto 0 0;

  svg {
   margin: 5px;
  }

  &:hover {
   color: #479;
  }
 }
`;
