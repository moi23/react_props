import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background-color: #142850;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h2 {
    color: white;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
  }

  a {
    color: white;
    text-decoration: none;
    padding: 20px;
  }

  a:hover {
    color: #142850;
    text-decoration: none;
    padding: 20px;
    background-color: white;
  }
`;
