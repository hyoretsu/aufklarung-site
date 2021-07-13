import { styled } from '@linaria/react';

export const Styling = styled.div`
 > h3 {
  font-size: 1.4em;
  font-variant: small-caps;
  margin: 2vh 2vw 0;
  color: #f70;

  @media (max-width: 426px) {
   margin-left: 4vw;
  }
 }
`;

export const HomepageNews = styled.div`
 display: flex;

 @media (max-width: 426px) {
  flex-wrap: wrap;
 }

 section + section {
  max-width: 370px;
  border-left: 1px solid #ddd;

  div {
   margin: auto 0;
  }

  @media (max-width: 426px) {
   border-left: none;
  }
 }
`;
