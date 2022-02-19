import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: left;
  align-items: center;
  background-color: #333;
  border-bottom: 1px solid lightgray;
  padding-botton: 1rem;
  z-index: 999;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: right;
  align-items: center;
`;
