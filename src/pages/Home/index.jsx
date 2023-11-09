import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { api } from "../../services/api";
import { Container, Content } from "./style";
import { useState, useEffect } from "react";
export function Home() {
  const [search, setSearch] = useState("");
  const [notesMovies, setNotesMovies] = useState([]);
  const navigate = useNavigate();
  function handleDetails(id){
    console.log()
    navigate(`/details/${id}`)
    
  }
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(
        `/moviesnotes?title=${search}`
      );
      setNotesMovies(response.data);
    }
    fetchNote();
  }, [search]);
  return (
    <Container>
      <Header><Input placeholder="pesquise aqui" value={search} onChange={e => setSearch(e.target.value)}/></Header>

      <Content>
        <Section
          title="Meus Filmes"
          button
          titleButton="Adicionar Filme"
          link="/new"
        >
          {notesMovies &&
            notesMovies.map((note) => (
              <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
            ))}
        </Section>
      </Content>
    </Container>
  );
}
