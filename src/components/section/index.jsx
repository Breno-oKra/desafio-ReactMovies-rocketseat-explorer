import { Container } from "./style";
import { Button } from "../button";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
export function Section({ title, children, button, link, titleButton,subtitle }) {
  return (
    <Container>
      <div>
        <h2 className={subtitle? 'subtitle' : ''}>{title}</h2>
        {button? (
            <Link to={link}>
                <Button title={titleButton} icon={<FiPlus/>} />
            </Link>
        ) : <></>}
      </div>

      {children}
    </Container>
  );
}
