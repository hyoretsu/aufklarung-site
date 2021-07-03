import { styled } from '@linaria/react';

export const Container = styled.header`
 background-color: #ddd8;
 display: flex;
 flex-direction: column;
 font-variant: small-caps;
 width: auto;

 > a {
  margin: 0 auto;

  img {
   padding: 1.5vh 0 1vh;
  }
 }
`;

export const UserNav = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 border-bottom: 1px solid #f70;
 padding: 5px 0;

 a {
  color: #f70;
  font-size: 0.9em;
  font-weight: 700;

  margin-right: 2vw;

  @media (max-width: 426px) {
   font-size: 1em;
  }

  &:hover {
   color: #479;
  }
 }
`;

export const Navigation = styled.nav`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;

 > a {
  font-size: 1.4em;

  color: #f70;
  padding: 1.5vh 1.3vw 1vh 1vw;

  & + a {
   padding-left: 1.3vw;
  }

  &:hover {
   color: #479;
   padding-bottom: calc(0.6vh - 2px);
   border-bottom: 2px solid #479;
  }
 }
`;

export const Dropdown = styled.div`
 cursor: pointer;
 font-size: 1.4em;

 position: relative;
 z-index: 1;
 color: #f70;

 padding: 1.5vh 1.3vw 1vh;

 svg {
  margin: auto 0;
  height: 2vh;
  width: auto;
 }

 ul {
  display: none;
  background-color: #fff;
  width: 190%;
  list-style: none;
  border-radius: 8px;

  position: absolute;
  left: 0;
  margin-top: 1vh;
  box-shadow: 0 0 8px #0004;

  li {
   padding: 4px 5px;

   a {
    font-size: 1em;

    color: #f70;
   }

   &:hover {
    background: #ddd;
    padding-left: 2px;
    border-left: 3px solid #479;

    & a {
     color: #479;
    }
   }

   &:first-child {
    border-top-left-radius: 6px;
   }
   &:last-child {
    border-bottom-left-radius: 6px;
   }
  }
 }

 &:hover {
  color: #479;

  & ul {
   display: block;
  }
 }
`;

export const Search = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1em;
 font-weight: 700;

 color: #f70;
 margin-left: auto;
 padding: 2vh 1vw 1vh;

 @media (max-width: 426px) {
  flex-basis: 100%;
  padding: 1vh 0;
 }

 svg {
  margin-right: 0.5vw;
 }

 &:hover {
  color: #479;
  padding-bottom: calc(1vh - 2px);
  border-bottom: 2px solid #479;
 }
`;
