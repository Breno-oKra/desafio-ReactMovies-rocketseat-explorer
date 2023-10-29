import { Container, Profile, Logo } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
export function Header() {
  return (
    <Container>
      <Logo>
        <h1>RocketMovies</h1>
      </Logo>
      <main>
        <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch} />
      </main>

      <Profile to="/profile">
        <div>
          
          <strong>Breno-okra</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/breno-okra.png" alt="foto do ussuario" />
      </Profile>
    </Container>
  );
}
