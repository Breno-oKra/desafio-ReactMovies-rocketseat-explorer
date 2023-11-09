import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Container, Profile, Logo } from "./styles";
import { api } from "../../services/api";
import placeholderImg from '../../assets/temp_avatar.svg'
export function Header({ children }) {
  const { singOut, user } = useAuth();
  console.log(user)
  const navigate = useNavigate();
  function handleSingOut() {
    navigate("/");
    singOut();
  }
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg
  console.log(avatarURL)
  return (
    <Container>
      <Logo>
        <h1>RocketMovies</h1>
      </Logo>
      <main>{children}</main>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSingOut}>sair</button>
        </div>
        <img src={avatarURL} alt="foto do ussuario" />
      </Profile>
    </Container>
  );
}
