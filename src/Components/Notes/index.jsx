import { Container } from "./style";
import { Tag } from "../Tags";

export function Notes({data, ...rest}){
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.noteTags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}