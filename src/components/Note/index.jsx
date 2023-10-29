import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { Container,Box } from "./style";
export function Note({ data, ...rest }) {
 
  return (
    <Container>
      <Box>
        <h1>{data.title}</h1>
        <Stars note={data.note}/>

      </Box>

      <div>{data.description}</div>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
