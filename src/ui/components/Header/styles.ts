import { styled } from '@linaria/react';

export const Container = styled.header`
 background-color: #ddd8;
 font-variant: small-caps;
 font-weight: 500;
 font-stretch: 110%;
 width: auto;

 > a {
  img {
   display: block;
   margin: 0 auto;
   padding: 1.5vh 0 1vh;
   max-width: 100%;
  }
 }
`;

export const UserNav = styled.div`
 display: flex;
 justify-content: flex-end;
 border-bottom: 1px solid #f70;
 padding: 0.3vw 2vw;

 a {
  color: #f70;
  font-weight: 700;

  &:hover {
   color: #479;
  }
 }
`;

export const Navigation = styled.nav`
 display: flex;
 flex-wrap: wrap;

 @media (max-width: 426px) {
  justify-content: center;
 }

 > a,
 div {
  color: #f70;
  font-size: 1.4em;
  padding: 1.5vh 1vw;

  &:hover {
   color: #479;
   padding-bottom: calc(1.5vh - 3px);
   border-bottom: 3px solid #479;
  }
 }
`;

export const Dropdown = styled.div`
 cursor: pointer;
 position: relative;

 svg {
  height: 60%;
  transform: translate(0, 12%);
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

  @media (max-width: 426px) {
   z-index: 1;
  }

  li {
   padding: 0.6vh 0.3vw;

   a {
    color: #f70;
   }

   &:hover {
    background: #ddd;
    padding-left: 0.1vw;
    border-left: 3px solid #479;

    a {
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

  ul {
   display: block;
  }
 }
`;

export const Search = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
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
