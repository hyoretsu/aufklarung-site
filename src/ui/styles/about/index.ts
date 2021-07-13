import { styled } from '@linaria/react';

export const Styling = styled.div`
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 section {
  h4 {
   font-variant: small-caps;
   font-stretch: 110%;
   color: #f70;
  }

  @media (max-width: 426px) {
   padding: 2vh 4vw 3vh;

   h4 {
    margin-bottom: 1vh;
   }

   > a,
   p {
    text-align: unset;
   }

   li + li {
    margin-top: 0.5vh;
   }
  }

  > a,
  p {
   line-height: 1.5;
  }

  ol {
   margin-top: 1.5vh;
  }

  & + section {
   margin-top: 3vh;
  }
 }
`;
