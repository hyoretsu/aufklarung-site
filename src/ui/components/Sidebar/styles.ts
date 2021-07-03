import { styled } from '@linaria/react';

export const Container = styled.aside`
 display: flex;
 flex-direction: column;
 margin-top: 4vh;
 margin-left: 2vw;

 strong {
  margin-bottom: 4vh;

  font-size: 1em;
  font-weight: 700;
  color: #0007;
 }
`;

export const SubmissionButton = styled.button`
 background-color: #479;
 font-size: 0.9em;
 font-weight: 700;
 color: #fff;

 padding: 0.8vh 0.7vw;
 border: #0009;
 border-radius: 0.2vw;

 &:hover {
  background-color: #f70;
 }
`;
