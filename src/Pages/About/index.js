import React from 'react';
import { Row } from 'react-bootstrap';

import Title from './Components/Title';

import Texts from '../../StaticContent/Texts';
import Image1 from '../../Assets/Images/foto-1-about-new.png';
import Image2 from '../../Assets/Images/foto-2-about-new.png';

import { Container, ContainerImage, General, ContainerDescription, Description } from './styles';

import Image from 'GeneralComponents/Image';

export function About() {
    return (
        <Container>
            <General>
                <ContainerImage  xs="12" sm="12" md="4" lg="4">
                    <Image src={Image1} />
                    <Image src={Image2} />
                </ContainerImage>
                <ContainerDescription  xs="12" sm="12" md="8" lg="8">
                    <Row>
                        <Title>{Texts.WHEN_I}</Title>
                        <Description>
                            Um guri nascido em um bairro muito distante do centro da capital gaúcha, um guri muito criativo que adorava desenhar, brincar de "escritório" com teclados imaginários e assistir Castelo RÁ-TIM-BUM a tarde após o almoço…
                        </Description>
                        <Description>
                            Brincar com as mãos sempre foi seu melhor passatempo. Esse guri foi crescendo e aprendeu que para sobreviver deveria criar o seu próprio destino, sua criatividade sempre foi marcante e intensa, transbordava, sentia-se preso naquilo que fazia e não gostava de ser subalterno... ou subordinado? - GOOGLE PESQUISAR - Enfim…
                        </Description>
                        <Description>
                            Sua habilidade com as mãos foi tomando cada vez mais “forma” em sua cabeça, a inquietude fez procurar tudo que podia e estava ao seu alcance, determinação sempre andou junto de sua criatividade.
                        </Description>
                        <Description>
                            Sempre soube que nada do que queria seria fácil, haviam muitas barreiras, MUITAS! Família, origem, condições, sexualidade, financeira… Mas a maior delas, sempre foi ele mesmo…
                        </Description>
                        <Description>
                            Esse guri um dia decidiu que faria do jeito dele, como podia e do jeito que dava… Foi crescendo, amadurecendo, se importando cada vez menos com o que estava ao seu redor e foi seguindo o seu coração…
                        </Description>
                        <Description>
                            Foi usando aquilo que estava em suas mãos e tirando o maior proveito dela, exigente que só ele, mas com um propósito, a satisfação de ter feito e criado o seu próprio destino, sem depender de ninguém e nem precisar fazer para alguém.
                        </Description>
                        <Description>
                            As poucas condições sempre fizeram com que buscasse o máximo de tudo, nem sempre tinha o material certo para o produto certo, se tem o branco prq tem que usar o preto? e assim foi seguindo e trilhando o seu caminho…
                        </Description>
                        <Description>
                            Caminho esse que é looooooongo, cheio de pedregulhos, buracos e barreiras, mas esse guri nunca quis chegar ao destino final e sim aproveitar a viagem, pois é isso que importa!
                        </Description>
                    </Row>
                </ContainerDescription>
            </General>
        </Container>
    );
}

export default About;