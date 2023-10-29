import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea/index";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Container, Form } from "./style";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
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
            <Input placeholder="title" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="text" />
          </div>

          <Textarea placeholder="observações" />
          <Section title="Marcadores" subtitle>
            <div className="tags">
              <NoteItem value="Drama" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <div>
            <Button title="Excluir Filme" actionRemove />
            <Button title="Salvar alterações" />
          </div>
          
        </Form>
      </main>
    </Container>
  );
}
