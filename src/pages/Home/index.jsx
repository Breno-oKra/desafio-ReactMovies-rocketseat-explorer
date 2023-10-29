import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Container, Content } from "./style";

export function Home() {
  return (
    <Container>
      <Header/>
      <Content>
        <Section title="Meus Filmes" button titleButton="Adicionar Filme" link="/new">
            
            <Note 
            data={
              {
                title:"Interestelar", 
                tags:[
                    {id:"2",name:"ficção"},
                    {id:'3',name:"Drama"},
                    {id:'4',name:"Familia"},
                ],
                note:5,
                description:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As 'missões Lázaro' enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram."
                }
                }/>
                 <Note 
            data={
              {
                title:"Crepusculo", 
                tags:[
                    {id:"2",name:"ficção"},
                    {id:'3',name:"romance"},
                    {id:'4',name:"teen"},
                ],
                note:2,
                description:"A estudante Bella Swan conhece Edward Cullen, um belo mas misterioso adolescente. Edward é um vampiro, cuja família não bebe sangue, e Bella, longe de ficar assustada, se envolve em um romance perigoso com sua alma gêmea imortal."
                }
                }/>
                  <Note 
            data={
              {
                title:"Jogos Mortais X", 
                tags:[
                    {id:"2",name:"terror"},
                    {id:'3',name:"Slasher"},
                    {id:'4',name:"Suspense"},
                ],
                note:4,
                description:"Esperando por uma cura milagrosa, o adoecido John Kramer viaja para o México para um procedimento médico arriscado e experimental. Mas ao chegar no destino, se depara com um ambiente macabro, e descobre que toda a operação é uma farsa para enganar pessoas já vulneráveis. Agora armado com um novo propósito, o infame serial killer usa armadilhas insanas e engenhosas para virar o jogo contra os vigaristas, relembrando o motivo de ser conhecido como o terrível vilão Jigsaw."
                }
                }/>
        </Section>
      </Content>
    </Container>
  );
}
