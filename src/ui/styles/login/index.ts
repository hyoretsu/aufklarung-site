import { styled } from '@linaria/react';

export const Styling = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 3vh 2vw 8vh;
 border-top: 1px solid #ddd;

 h1 {
  color: #f70;
  font-variant: small-caps;
  font-size: 1.4em;
 }

 form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  div {
   display: flex;
   flex-direction: column;
   position: relative;
   margin-top: 0.5vw;
   width: 100%;

   label {
    color: #777;
    font-style: italic;
   }

   input {
    padding: 0 0.5vw;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-size: 0.94rem;
    line-height: calc(2.143rem - 2px);

    &:hover {
     & p {
      display: block;
     }
    }
   }

   p {
    /* display: none; */
    color: #fff;
    background: #f00;
    box-shadow: 0 0 8px #000;
    border-radius: 10px;
    position: absolute;
    max-width: 80%;
    right: -5%;
    bottom: 50%;
    padding: 0 6px;
   }
  }

  a {
   align-self: flex-start;
   font-size: 0.94em;
  }

  button {
   margin: 1vw 0;
   max-width: 50%;
  }
 }
`;
