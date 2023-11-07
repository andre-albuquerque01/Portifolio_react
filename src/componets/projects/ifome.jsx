import persona from "../../img/imgIfome/ana.png"
import actionAna from "../../img/imgIfome/actionAna.png"
import lowFi from "../../img/imgIfome/lo-fi.png"
import moklowFi from "../../img/imgIfome/mockupsBefAndAft.png"
import mockups from "../../img/imgIfome/mockups.png"
import { Obs } from "../obs"
function Ifome() {
    return (
        <aside className="mt-24 max-sm:px-2 px-20 space-y-8" id="#top" >
            <div className="" id="ifome">
                <div className="sobre">
                    <div className="text-2xl">
                        <h1>Ifome</h1>
                    </div>
                    <div className="text-sobre">
                        Aplicatico para restaurante, tendo cardápio que consta o pagamento e podendo fazer reservas para
                        estar no local.
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
                        <div className="">
                            Projete um aplicativo de vendas móvel para um restaurante familiar
                        </div>
                        <div className="font-semibold">
                            Duração do projeto:
                        </div>
                        <div className="">
                            3 meses
                        </div>
                        <div className="font-semibold">O problema:</div>
                        <div className="">
                            A indecisão e a escolha de um lugar adequado.
                        </div>
                        <div className="font-semibold">O objetivo:</div>
                        <div className="">
                            Ajudar o cliente ter uma experiência melhor no estabelecimento.
                        </div>
                        <div className="font-semibold">Minha função:</div>
                        <div className="">
                            Gerenciar o projeto, sendo que estarei em todas as funções.
                        </div>
                        <div className="font-semibold">Responsabilidades:</div>
                        <div className="">
                            Construir Wireframing, realizar a pesquisa com o usuário, construir o protótipo e tentar
                            satisfazer o desejo do usuário.
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Compreensão o usuário</h2>
                        </div>

                        <div className="font-semibold">Pesquisa do usuário:</div>
                        <div className="">
                            O restaurante tem três opções de como que vai querer comer, como retirar no local, fazer a
                            refeição no local e a entrega. Com isso, aumentando o poder de escolha do cliente, que dá total
                            autonomia de fazer a sua refeição.
                        </div>

                        <div className="font-semibold">Pontos de dor:</div>
                        <div className="flex space-x-3">
                            <div>1 - Demora pela entrega;</div>
                            <div>2 - Demora pela atualização do cadastro de reserva;</div>
                            <div>3 - Ocupação do local.</div>
                        </div>

                        <div className=""><img src={persona} alt="Personagem Ana" /></div>
                        <div className="font-semibold">Personagem: Ana</div>
                        <div className="">Ana é médica, que precisa de lugares com atendimentos rápidos, porque não
                            tem tempo de fazer as refeições;
                        </div>

                        <div className=""><img src={actionAna} alt="Ação da Ana" /></div>
                        <div className="font-semibold">Mapa da jornada: Ana</div>
                        <div className="">
                            As ações do restaurante podem afetar diretamente as ações de Ana, pois ela precisa de algo
                            rápido.
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Iniciando o design</h2>
                        </div>

                        <div className=""><img src={lowFi} alt="Wireframes digital" /></div>
                        <div className="font-semibold">Wireframes digital:</div>
                        <div className="">
                            A lo-fi, tinha a ideia de mostrar onde ficariam os elementos, então apenas para identificar o
                            que seria em cada espaço.
                        </div>
                        <div className="font-semibold">Protótipo de baixa fidelidade:</div>
                        <div className="">
                            O lo-fi, serve para ter uma ideia das posições e de como irá ficar o App.
                        </div>
                        <div className="">
                            <a href="https://www.figma.com/file/cCOehaLYFtiNXjL9feWiAU/mockups?node-id=0%3A1"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o Figma do low-fi</a>
                        </div>

                        <div className="font-semibold">Estudo de usabilidade:</div>
                        <div className="">
                            <div>
                                <div className="py-1">
                                    Descobertas da 1ª Rodada
                                </div>
                                1 - Usuário quer maneira mais fácil;
                                2 - Quer tutorial a qualquer momento;
                                3 - Cupom para dar desconto;
                            </div>
                            <div>
                                <div className="py-1 mt-3">
                                    Descobertas da 2ª Rodada
                                </div>
                                1 - Simplicidade em realizar pedido;
                                2 - Usuário quer opções de entregas;
                                3 - Usuários querem uma customização do pedido;
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Refino o design</h2>
                        </div>

                        <div className=""><img src={moklowFi} alt="Mockups" /></div>
                        <div className="font-semibold">Mockups:</div>
                        <div className="">
                            A parte onde mostra o item, ela se tornou algo simples para que o usuário entenda como que foi
                            feita a melhorá.
                        </div>

                        <div className=""><img src={mockups} alt="Mockups"  /></div>
                        <div className="font-semibold">Mockups:</div>
                        <div className="">
                            Ao fazer o segundo estudo de usabilidade, percebemos que não tinha opção de onde seria feita a
                            refeição, e a mensagem de finalizar, então incluímos em nosso hi-fi essas etapas.
                        </div>

                        <div className="font-semibold">Alta fidelidade protótipo:</div>
                        <div className="">
                            O hi-fi, apresenta uma estrutura simples onde o usuário usa de forma simples e rápida, sem que
                            tenha o problema de falta de função.
                        </div>
                        <div className="">
                            <a href="https://www.figma.com/file/cCOehaLYFtiNXjL9feWiAU/mockups?node-id=26%3A2"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o Figma do hi-fi</a>
                        </div>

                        <div className="font-semibold">Considerações de acessibilidade:</div>
                        <div className="">
                            1 - Com a estruturação adequada do App, o leitor pode ler sem muitos problemas, pois terá um
                            sequência seguindo a WCAG 3.
                            2 - Ao utilizar cores neutras, para facilitar pessoas com problemas de vista, em relação a
                            claridade. Adicionaremos uma função de contraste de cores no App.
                            3 - Ao usar poucas animações, ajudamos pessoas que têm problemas com a tremedeira em suas
                            mãos, para evitar toques acidentais e ativar função sem querer.
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Daqui para frente</h2>
                        </div>

                        <div className="font-semibold">Impacto:</div>
                        <div className="">
                            Como o mercado de restaurantes estão indo devagar na inovação, inovar em um restaurante é algo
                            ideal para os dias atuais, pois diminuirá o tempo gasto pelo cliente.
                        </div>

                        <div className="font-semibold">Aprendizado:</div>
                        <div className="">
                            Ao criar um protótipo, se aprende desde o começo até o fim, como fazer as pesquisas e trabalhar
                            com wireframes.
                        </div>

                        <div className="font-semibold">Próximos passos:</div>
                        <div className="">
                            1 - Começaria a desenvolver em uma linguagem que o computador entenda, para o cliente ter acesso
                            real.
                            2 - Implantaria em algum restaurante, para que possa melhorar o seu atendimento, aumentando
                            a rotatividade.
                            3 - Compartilharia a ideia com os colegas de sala, para poder dar uma melhor performance no
                            App.

                        </div>

                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Apresentação, slides</h2>
                        </div>
                        <div className="font-semibold">Apresentação do estudo de caso</div>
                        <div className="">
                            <a href="https://docs.google.com/presentation/d/1KZZxw3eN4_bcdo65MI7gVs0JOJzcJFzK1_v-93Il09M/edit?usp=sharing"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para a apresentação</a>
                        </div>
                    </div>
                    <Obs />
                </div>
            </div>
        </aside>
    )
}

export default Ifome