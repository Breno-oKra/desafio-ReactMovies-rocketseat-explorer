import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea/index";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Container, Form } from "./style";
import { FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { useState} from "react";

export function New() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState(0);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate()
  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(tagDeleted) {
    // seria o mesmo que links = {...links,newLink}
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
    
  }
  async function handleNewMovie(){
    if (!title) {
      return alert("Digite o titulo meu truta");
    }
    if (newTag) {
      return alert(
        "Voce deixou uma tag no campo para adiconar mais não adicionou meu parcero, vai la logo"
      );
    }
    
    await api.post("/moviesnotes", {
      title,
      description,
      note,
      tags,
    });

    alert("Nota Criada com sucesso");
    navigate(-1);
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft /> voltar
            </Link>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input placeholder="title" type="text" onChange={e => setTitle(e.target.value)} />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" value={note} onChange={e => setNote(e.target.value)}  />
          </div>

          <Textarea placeholder="observações" onChange={e => setDescription(e.target.value)}  />
          <Section title="Marcadores" subtitle>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onclick={() => handleRemoveTag(tag)}
                  />))
              }
              <NoteItem isNew 
              placeholder="Novo marcador" 
              value={newTag} 
              onChange={e => setNewTag(e.target.value)} 
              onclick={handleAddTag} />
            </div>
          </Section>
          <div>
            <Button title="Excluir Filme" actionRemove />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
          
        </Form>
      </main>
    </Container>
  );
}
