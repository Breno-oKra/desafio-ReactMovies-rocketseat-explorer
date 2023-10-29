import { Container } from "./style";
import { FiPlus,FiX } from "react-icons/fi";
export function NoteItem({isNew,value,onclick,...rest}){
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button type="button" className={isNew ? 'button-add' : 'button-delete'} onClick={onclick}> {isNew? <FiPlus/> : <FiX/>}</button>
        </Container>
    )
}