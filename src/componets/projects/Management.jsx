import mer from '../../img/imgGerenciadorEscala/mer.png'
import casoUso from '../../img/imgGerenciadorEscala/CasoUso.png'
import diagramaClass from '../../img/imgGerenciadorEscala/DiagramaClass.png'
import login from '../../img/imgGerenciadorEscala/Login.png'
import editPerfil from '../../img/imgGerenciadorEscala/EditPerfil.png'
import cadPerfil from '../../img/imgGerenciadorEscala/CadPerfil.png'
import recuperarPerfil from '../../img/imgGerenciadorEscala/RecuperarSenha.png'
import AlocacaoEscala from '../../img/imgGerenciadorEscala/AlocacaoEscala.png'
import AlocacaoPosto from '../../img/imgGerenciadorEscala/AlocacaoPosto.png'
import Escala from '../../img/imgGerenciadorEscala/Escala.png'
import CadEscala from '../../img/imgGerenciadorEscala/CadEscala.png'
import EditEscala from '../../img/imgGerenciadorEscala/EditEscala.png'
import Posto from '../../img/imgGerenciadorEscala/Posto.png'
import CadPosto from '../../img/imgGerenciadorEscala/CadPosto.png'
import EditPosto from '../../img/imgGerenciadorEscala/EditPosto.png'
import funcionarios from '../../img/imgGerenciadorEscala/funcionarios.png'
import Dashboard from '../../img/imgGerenciadorEscala/Dashboard.png'

export const Management = () => {
    return (
        <aside className="mt-24 max-sm:px-2 px-20 space-y-8" id="#top" >
            <div className="" id="ifome">
                <div className="">
                    <div className="text-2xl">
                        <h1>Gestão Operacional Funcionários</h1>
                    </div>
                    <div className="text-sobre">
                        Sistema para fazer gerenciamento operacional de funcionários, onde pode alocar e cadastrar escalas e postos.
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
                                RF01. Cadastro do funcionário
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: será realizado pelo departamento pessoal no ato da contratação.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        Cadastro de novos funcionários: realizado pelo RH da empresa; onde será atribuído o seu cargo; o horário; e entre outros.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF02. Login
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que o gestor  faça login através do e-mail e senha.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <ol className="list-decimal ml-10">
                                        <li>
                                            O sistema deve permitir que o administrador informe seu e-mail e informar a senha para logar;</li>
                                        <li>
                                            Se o e-mail ou a senha estiver incorreta exibir erro;
                                        </li>
                                        <li>
                                            Botão esqueci a senha, usuário informa o e-mail é enviado uma nova senha para o e-mail informado, administrador poderá fazer a alteração dessa senha.
                                        </li>
                                        <li>
                                            Após realizar o login com sucesso, o administrador deve ter acesso às funcionalidades exclusivas de gerenciamento de funcionários, alocação de postos, ausências e outras funcionalidades;
                                        </li>
                                        <li>
                                            O administrador deve ter a opção de permanecer logado no sistema por um período determinado de tempo;
                                        </li>
                                        <li>
                                            Caso o administrador permaneça inativo por um período de tempo determinado, o sistema deve realizar automaticamente o logout do usuário;
                                        </li>
                                        <li>
                                            O sistema deve permitir que o administrador realize o logout a qualquer momento.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF03. Cadastro
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que o gestor faça cadastro para criar a sua conta.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        <ol className="list-decimal ml-10">
                                            <li>
                                                Primeiro acesso como administrador disponibilizar o cadastro da empresa, contendo o nome, e-mail do gestor e senha;
                                            </li>
                                            <li>
                                                Se e-mail já cadastrado, exibir mensagem de usuário cadastrado e seguir para tela de login;
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF04.Gerenciamento de escala trabalho
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que o usuário (Gestor) da aplicação realize a gestão das escalas de trabalho, cobertura de férias, folgas e ausências legais e verificando a sua atividade, se está ativo ou inativo para a escala;
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        <ol className="list-decimal ml-10">
                                            <li>
                                                A aplicação deve permitir que o usuário cadastre novos postos de trabalho.
                                            </li>
                                            <li>
                                                A aplicação deve permitir que o usuário (Gestor)  aloque os funcionários de acordo com as suas funções e a disponibilidade do posto.
                                            </li>
                                            <li>
                                                A aplicação deve permitir que o usuário (Gestor) visualize todos os postos de serviço com seus respectivos colaboradores e escalas de serviço.
                                            </li>
                                            <li>
                                                A aplicação deve permitir que o usuário (Gestor)  altere a escala de serviço de acordo com a disponibilidade de colaboradores para efetivação do posto ou cobertura.
                                            </li>
                                            <li>
                                                A aplicação deve permitir que o usuário (Gestor)  filtre os funcionários pela escala de trabalho; pelo posto; por situação da disponibilidade do funcionário.
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF05. Dashboard
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações: permitir que o Gestor visualize o dashboard com informação estatística da escala de serviço.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        <ol className="list-decimal ml-10">
                                            <li>
                                                Permitir que os gestores visualizem o menu completo de forma digital.
                                            </li>
                                            <li>
                                                Fornecer tabelas sobre as escalas.
                                            </li>
                                            <li>
                                                Será fácil de intuitivo para os gestores usarem, para não se confundirem.
                                            </li>
                                        </ol>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                RF06. Escala de serviço
                            </div>
                            <div className="">
                                <div>
                                    <p>
                                        Informações:  permitir que o gestor faça alteração nas escalas de trabalho ajustando a necessidade operacional.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Regras:
                                    </p>
                                    <p>
                                        <ol className="list-decimal ml-10">
                                            <li>
                                                A aplicação deve permitir que o gestor navegue pelo menu digital para alocamento dos colaboradores conforme necessário;
                                            </li>
                                            <li>
                                                O usuário deve ser capaz de visualizar informações detalhadas sobre cada colaborador, incluindo escala, faltas, folga, ausências.
                                            </li>
                                            <li>
                                                O gestor deve ser capaz de adicionar ou remover colaboradores a qualquer momento antes de enviar a escala de serviço.
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
                                    Linguagem PHP; Frameworks: Laravel e React Js;
                                </li>
                                <li>
                                    Banco de dados Postgresql;
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

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Caso de uso</h2>
                        </div>
                        <div className=""><img src={casoUso} alt="caso de uso" /></div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Diagrama de classe</h2>
                        </div>
                        <div className=""><img src={diagramaClass} alt="diagrama de classe" /></div>
                    </div>

                    <div className="space-y-2 w-1/3 object-cover">
                        <div className="text-xl">
                            <h2 className="font-bold">Apresentação</h2>
                        </div>
                        <div className="">
                            <div className="">
                                <a href="https://github.com/andre-albuquerque01/Gerenciador_escala.git"
                                    target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o código</a>
                            </div>
                            <div className="text-lg">
                                <h2 className="font-semibold">Apresentação das telas</h2>
                                <p>As telas de Perfil, Posto, Escala e Alocação oferecem funcionalidades completas de CRUD.</p>
                            </div>
                            <div className='space-y-5'>
                                <div>
                                    <p>Login - Cadastro usuário - Editar usuário - Recuperar senha</p>
                                    <div className="">
                                        <img src={login} alt="login" />
                                    </div>
                                    <div className="">
                                        <img src={cadPerfil} alt="cadastrar usuário" />
                                    </div>
                                    <div className="">
                                        <img src={editPerfil} alt="editar usuário" />
                                    </div>
                                    <div className="">
                                        <img src={recuperarPerfil} alt="recuperar senha usuário" />
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <img src={Dashboard} alt="recuperar senha usuário" />
                                    </div>
                                </div>
                                <div>
                                    <p>Posto - Cadastro posto - Editar posto</p>
                                    <div className="">
                                        <img src={Posto} alt="Posto" />
                                    </div>
                                    <div className="">
                                        <img src={CadPosto} alt="cadastrar posto" />
                                    </div>
                                    <div className="">
                                        <img src={EditPosto} alt="editar Posto" />
                                    </div>
                                </div>
                                <div>
                                    <p>Escala - Cadastro escala - Editar escala</p>
                                    <div className="">
                                        <img src={Escala} alt="Escala" />
                                    </div>
                                    <div className="">
                                        <img src={CadEscala} alt="cadastrar Escala" />
                                    </div>
                                    <div className="">
                                        <img src={EditEscala} alt="editar Escala" />
                                    </div>
                                </div>
                                <div>
                                    <p>Alocação escala - Alocação Posto</p>
                                    <div className="">
                                        <img src={AlocacaoEscala} alt="login" />
                                    </div>
                                    <div className="">
                                        <img src={AlocacaoPosto} alt="cadastrar usuário" />
                                    </div>
                                </div>
                                <div>
                                    <p>Funcionarios</p>
                                    <div className="">
                                        <img src={funcionarios} alt="login" />
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
