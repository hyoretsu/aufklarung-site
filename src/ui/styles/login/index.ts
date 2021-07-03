import { styled } from '@linaria/react';

export const Styling = styled.div`
 padding: 2vh 2vw;
 border-top: 1px solid #ddd;

 form {
  display: flex;
  flex-direction: column;
  max-width: 13vw;

  fieldset {
   display: flex;
   flex-direction: column;

   label {
   }

   input {
    &:hover {
     & p {
      display: block;
     }
    }
   }

   p {
    display: none;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 0 8px #0004;
    position: absolute;
   }
  }
 }
`;
