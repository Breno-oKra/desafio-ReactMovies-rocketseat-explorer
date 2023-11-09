import { Header } from "../../components/header";
import { Container, Content, Profile } from "./styles.js";

import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/index.jsx";
import TEMPiMG from "../../assets/temp_avatar.svg"
export function Details() {
  const params = useParams();
  const { user} = useAuth()
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : TEMPiMG
  async function handleRemove() {
    const confirm = window.confirm("Deseja remover a nota");
    if (confirm) {
      await api.delete(`/moviesnotes/${params.id}`);
      navigate(-1);
    }
  }
  useEffect(() => {
    async function fetchNote() {

      const response = await api.get(`/moviesnotes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>

            <div>
              <div>
                <h2>{data.title}</h2>
                <Stars note={data.note} />
              </div>
              <button onClick={handleRemove}>Excluir Nota</button>
            </div>
            <Profile>
              <img src={avatarURL} alt="" />
              <span>Por {user.name}</span>
              <div>
                <FiClock />
                {data.updated_at}
              </div>
            </Profile>

            <footer>
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </footer>

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}

export default Details;
