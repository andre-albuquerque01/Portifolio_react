/* eslint-disable react/no-unescaped-entities */
import mer from '../../img/imgEvents/mer.png'
import dashboard from '../../img/imgEvents/dashboard.png'
import event from '../../img/imgEvents/event.png'
import index from '../../img/imgEvents/index.png'
import painel from '../../img/imgEvents/painel.png'
import painelAdm from '../../img/imgEvents/painelAdm.png'
import painelParticipando2 from '../../img/imgEvents/painelParticipando2.png'
import search from '../../img/imgEvents/search.png'
import listP from '../../img/imgEvents/listDeParticipante.png'

export const Events = () => {
    return (
        <aside className="mt-24 max-sm:px-2 px-20 space-y-8" id="#top" >
            <div className="" id="ifome">
                <div className="">
                    <div className="text-2xl">
                        <h1>Events</h1>
                    </div>
                    <div className="text-sobre">
                        Site de eventos, para uma determinada entidade, para fazer a divulgação de seus eventos.
                    </div>
                </div>
            </div>
            <div className="text-justify">
                <div className="space-y-8">
                    <div className="space-y-5">
                        <div className="text-xl">
                            <h2 className="font-bold">Requisitos Funcionais</h2>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF01. Login de Cliente:
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que os usuários do aplicativo façam login com seus dados pessoais, e-mail e senha.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <ol className="list-decimal ml-10">
                                        <li>
                                            Cadastro novo Cliente: para criar um novo cadastro de cliente, o cliente deve fornecer um endereço de email e uma senha. Após o cadastro, um email de confirmação será enviado para o endereço de email fornecido, a fim de validar o novo cadastro do cliente.
                                        </li>
                                        <li>
                                            Esqueci a senha: o cliente esqueceu sua senha, logo é enviado um e-mail um token.
                                        </li>
                                        <li>
                                            Autenticação: O sistema deve verificar se as informações de login do cliente, verificar se já é cadastrado, caso o cliente já esteja cadastrado, mostra mensagem cliente cadastrado, se não houver cadastro daquele cliente segue a rotina normalmente.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF02. Gestão de eventos
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que o usuário (Administrador) da aplicação gerencie eventos que vão acontecer.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <ol className="list-decimal ml-10">
                                        <li>
                                            A aplicação deve permitir que os administradores cadastrem novos eventos;
                                        </li>
                                        <li>
                                            A aplicação deve permitir que os administradores desative os eventos que foram inutilizados;
                                        </li>
                                        <li>
                                            A aplicação deve permitir que os administradores visualizem todos os eventos;
                                        </li>
                                        <li>
                                            A aplicação deve permitir que os administradores alterem o status do evento de acordo com sua disponibilidade, podendo ser "disponível" ou "ocupada";
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF03. Menu digital
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que os usuários da aplicação visualizem eventos disponíveis, com descrições do evento, preços, foto, disponibilidade, localidade, capacidade, data de início e data de encerramento da inscrição.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        <ol className="list-decimal ml-10">
                                            <li>
                                                Permitir que os clientes visualizem os eventos de forma digital;
                                            </li>
                                            <li>
                                                Fornecer imagens e descrições claras dos eventos;
                                            </li>
                                            <li>
                                                Permitir que os clientes façam reserva diretamente na aplicação;
                                            </li>
                                            <li>
                                                Permitir que os clientes visualizem os preços do evento e seja atualizado o subtotal do pedido em tempo real, após aumentar o número de entradas.
                                            </li>
                                            <li>
                                                Será de fácil utilização, tanto para a clientela quanto para os responsáveis pela gestão do estabelecimento.
                                            </li>
                                            <li>
                                                Os eventos designados como indisponíveis na base de dados deverão ficar indisponíveis para fazer a seleção.
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Arquitetura do projeto</h2>
                        </div>

                        <div className="">
                            <ul className="list-disc ml-10">
                                <li>
                                    Linguagem: PHP;
                                </li>
                                <li>
                                    Frameworks: Laravel e Next.Js;
                                </li>
                                <li>
                                    Banco de dados MySql;
                                </li>
                                <li>
                                    Arquitetura: MVC;
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">MER Conceitual do Projeto</h2>
                        </div>
                        <div className=""><img src={mer} alt="modelo de entidade relacional" /></div>
                    </div>
                    <div className="space-y-2 w-1/3 object-cover">
                        <div className="text-xl">
                            <h2 className="font-bold">Apresentação</h2>
                        </div>
                        <div className="">
                            <div className="">
                                <a href="https://github.com/andre-albuquerque01/Events-App-front"
                                    target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o código do front-end</a>
                            </div>
                            <div className="">
                                <a href="https://github.com/andre-albuquerque01/Events-App"
                                    target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o código do Back-end</a>
                            </div>
                            <div className="text-lg">
                                <h2 className="font-semibold">Apresentação das telas</h2>
                                <p>As telas de Perfil, Posto, Escala e Alocação oferecem funcionalidades completas de CRUD.</p>
                            </div>
                            <div className='space-y-5'>
                                <div className="text-xl">
                                    <h2 className="font-bold">Telas</h2>
                                </div>
                                <div>
                                    <div className="">
                                        <p>Inicio</p>
                                        <p className='mt-3 mb-1'>Index</p>
                                        <img src={index} alt="inicio" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Evento</p>
                                        <img src={event} alt="evento" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Dashboard</p>
                                        <img src={dashboard} alt="dashboard" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Painel de participante</p>
                                        <img src={painelParticipando2} alt="Painel" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Pesquisa</p>
                                        <img src={search} alt="Resultado da Pesquisa" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Opções</p>
                                        <img src={painel} alt="Opções" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Opções do administrador</p>
                                        <img src={painelAdm} alt="Opções" />
                                    </div>
                                    <div className="">
                                        <p className='mt-3 mb-1'>Lista de participantes</p>
                                        <img src={listP} alt="Lista de participante" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
