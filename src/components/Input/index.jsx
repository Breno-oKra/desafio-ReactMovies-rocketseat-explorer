import { Container } from "./style";

//recebemos a propriedade icon com i minusculo
// depois transformamaos em Icon com i maiusculo para usar o componente
export function Input({icon:Icon,...rest}){
    return(
        <Container>
            {/* so mostra o Icon se Icon existir */}
            {Icon && <Icon/>}
            <input {...rest} />
        </Container>
    )
}