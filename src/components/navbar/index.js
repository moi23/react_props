import React from "react";

import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <h2>Yujin Dogs</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Filhotes Disponíveis</a>
        </li>
        <li>
          <a href="#">Nossos Cães</a>
        </li>
        <li>
          <a href="#">Cuidado com os Filhotes</a>
        </li>
        <li>
          <a href="#">Quem Somos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </Container>
  );
}
