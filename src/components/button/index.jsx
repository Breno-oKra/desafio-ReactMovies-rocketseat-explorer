import { Container } from "./style";

// se o loading não for passado, ele sera falso por padrão
export function Button({title,loading = false, icon, actionRemove= false,...rest}) {
  return <Container className={actionRemove? 'remove' : ''} type="button" disabled={loading} {...rest}>{icon? icon : <></>}{loading? "Carregando... " : title}</Container>;
}
