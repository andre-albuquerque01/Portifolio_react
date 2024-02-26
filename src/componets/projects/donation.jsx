import fabio from "../../img/imgDonation/personaFabio.png"
import actionFabio from "../../img/imgDonation/actionFabio.png"
import lowfi from "../../img/imgDonation/low-fi.png"
import mockups from "../../img/imgDonation/mockups.png"
import mockupHi from "../../img/imgDonation/mockupHi.png"
import { Obs } from "../obs";

function Donation() {
    return (
        <aside className="mt-24 max-sm:px-2 px-20 space-y-8" >
            <div className="" id="donation">
                <div className="sobre">
                    <div className="text-2xl">
                        <h1>Donation</h1>
                    </div>
                    <div className="text-sobre">
                        Aplicatico para ajudar as ONGs locais, para assim fazer um melhor trabalho na região.
                    </div>
                </div>
            </div>
            <div className="">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Visão Geral do Projeto</h2>
                        </div>
                        <div className="font-semibold">
                            O produto:
                        </div>
                        <div className="descriacao">
                            Criar um fluxo de adoção de animais de estimação para um abrigo de animais.
                        </div>
                        <div className="font-semibold">
                            Duração do projeto:
                        </div>
                        <div className="descriacao">
                            1 meses
                        </div>
                        <div className="font-semibold">O problema:</div>
                        <div className="descriacao">
                            Poucos instituições locais e mais nacional
                        </div>
                        <div className="font-semibold">O objetivo:</div>
                        <div className="descriacao">
                            Criar sites para instituições locais.
                        </div>
                        <div className="font-semibold">Minha função:</div>
                        <div className="descriacao">
                            Como gerente do projeto, realizo tudo.
                        </div>
                        <div className="font-semibold">Responsabilidades:</div>
                        <div className="descriacao">
                            Houve vários desafios, como fazer o wireframe do projeto, onde não tinha ideia, porém com o
                            passar do tempo houve…
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Compreensão o usuário</h2>
                        </div>

                        <div className="font-semibold">Pesquisa do usuário:</div>
                        <div className="descriacao">
                            A pesquisa com nossos usuários, foi de forma satisfatória dando um rumo maior para o nosso
                            design, deixando satisfeito com que foi realizado no decorrer.
                        </div>

                        <div className="font-semibold">Pontos de dor:</div>
                        <div className="descriacao">
                        <div className="py-2">
                                <div>
                                    1 - Poucas instituições
                                </div>
                                <p>
                                    As instituições mais famosas de rede nacional, acabam atrapalhando um pouco as que têm na região.
                                </p>
                            </div>
                            <div className="py-2">
                                <div>
                                    2 - Várias regiões
                                </div>
                                <p>
                                    Sem locais próximos de anunciar para doação a não em site de vendas.
                                </p>
                            </div>
                        </div>

                        <div className="img"><img src={fabio} alt="Personagem Fábio" /></div>
                        <div className="font-semibold">Personagem: Fábio</div>
                        <div className="descriacao">Fábio é um gestor de negócios, que precisa de um site simples e confiável, para poder ajudar as entidades que cuidam de animais.
                        </div>

                        <div className="img"><img src={actionFabio} alt="Ação do Fábio" /></div>
                        <div className="font-semibold">Mapa da jornada:</div>
                        <div className="descriacao">
                            Para ajudar a criar um site confiável para poder satisfazer as necessidades de muitas pessoas que querem ajudar mas não sabem por onde.

                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Iniciando o design</h2>
                        </div>

                        <div className="img"><img src={lowfi} alt="Wireframes digital" /></div>
                        <div className="font-semibold">Wireframes digital:</div>
                        <div className="text-justify">
                            A lo-fi, tinha a ideia de mostrar onde ficariam os elementos, então apenas para identificar o que seria em cada espaço. A estrutura foi feita a partir de 6 telas, onde são postas as ideias iniciais para que possa ter a noção. O designer ficou bem simples, para que o usuário não tenha dificuldade em realizar as suas ações dentro do site.

                        </div>
                        <div className="font-semibold">Protótipo de baixa fidelidade:</div>
                        <div className="descriacao">
                            O lo-fi, serve para ter uma ideia das posições e de como irá ficar o App.
                        </div>
                        <div className="descriacao">
                            <a href="https://www.figma.com/file/6B15Z0hk8zObAIZGkzdrRq/doacao?node-id=11%3A264&t=1HQIWjzzndjvLYAz-1"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o Figma do low-fi</a>
                        </div>

                        <div className="font-semibold">Estudo de usabilidade: parâmetros</div>
                        <div className="descriacao">
                            <div className="py-2">
                                Study type:
                                Escala de usabilidade do sistema (SUS)
                            </div>
                            <div className="py-2">
                                Localização:
                                Brasil, remoto
                            </div>
                            <div className="py-2">
                                Participantes:
                                10 participantes
                            </div>
                            <div className="py-2">
                                Duração:
                                5-10 minutos
                            </div>
                        </div>

                        <div className="font-semibold">Estudo de usabilidade:</div>
                        <div className="descriacao">
                            Descobertas
                            1 - Pessoas com dificuldade de retornar ao início
                            2 - Não sabia por onde começar
                            3 - Dificuldade em fazer a doação.
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Refino o design</h2>
                        </div>

                        <div className="img"><img src={mockups} alt="Mockups" /></div>
                        <div className="font-semibold">Mockups:</div>
                        <div className="descriacao">
                            A parte onde mostra o início, ela se tornou algo simples para que o usuário entenda como que foi feita a melhorá.
                        </div>

                        <div className="img"><img src={mockupHi} alt="Mockups" /></div>
                        <div className="font-semibold">Mockups:</div>
                        <div className="descriacao">
                            A parte onde mostra a doação, ela se tornou algo simples para que o usuário entenda como que foi feita a melhorá
                        </div>

                        <div className="font-semibold">Alta fidelidade protótipo:</div>
                        <div className="descriacao">
                            O hi-fi, apresenta uma estrutura simples onde o usuário usa de forma simples e rápida, sem que tenha o problema de falta de função.
                        </div>
                        <div className="descriacao">
                            <a href="https://www.figma.com/file/6B15Z0hk8zObAIZGkzdrRq/doacao?node-id=0%3A1&t=gTYqEZbRviWyXmt5-0"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o Figma do hi-fi</a>
                        </div>

                        <div className="font-semibold">Considerações de acessibilidade:</div>
                        <div className="flex flex-col">
                            <div>
                                1 - Com a estruturação adequada do App, o leitor pode ler sem muitos problemas, pois terá um sequência seguindo a WCAG 3.
                            </div>
                            <div>
                                2 - Ao utilizar cores neutras, para facilitar pessoas com problemas de vista, em relação a claridade. Adicionaremos uma função de contraste de cores no App.
                            </div>
                            <div>
                                3 - Ao usar poucas animações, ajudamos pessoas que têm problemas com a tremedeira em suas mãos, para evitar toques acidentais e ativar função sem querer.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Daqui para frente</h2>
                        </div>

                        <div className="font-semibold">Impacto:</div>
                        <div className="descriacao">
                            Será de forma que ajudará os animais que estão precisando de um novo lar, para acompanhar uma
                            nova ideia de amor.
                        </div>

                        <div className="font-semibold">Aprendizado:</div>
                        <div className="descriacao">
                            Ao criar um protótipo, se aprende desde o começo até o fim, como fazer as pesquisas e trabalhar
                            com wireframes.
                        </div>

                        <div className="font-semibold">Próximos passos:</div>
                        <div className="flex flex-col">
                            <div>1 - Começaria a desenvolver em uma linguagem que o computador entenda, para o cliente ter acesso real</div>
                            <div>2 - Implantaria em alguma instituição, para que possa melhorar o seu atendimento, e ajudar a doar os animais que estão esperando por um novo dono.</div>
                            <div>3 - Compartilharia a ideia com os colegas de sala, para poder dar uma melhor performance no App.</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Apresentação, slides</h2>
                        </div>
                        <div className="font-semibold">Apresentação do estudo de caso</div>
                        <div className="descriacao">
                            <a href="https://docs.google.com/presentation/d/1CRPCRBIQMi62f73MJ3xV7Irps-E6rgWeSLU9rk1z8FA/edit?usp=sharing"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para a apresentação</a>
                        </div>
                    </div>
                    <Obs />
                </div>
            </div>
        </aside>
    )
}

export default Donation