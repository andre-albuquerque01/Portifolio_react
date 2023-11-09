import Alt from "../../img/imgApi_V1/Alt.png"
import Cad from "../../img/imgApi_V1/Cad.png"
import index from "../../img/imgApi_V1/index.png"
export default function ApiUser() {
    return (
        <aside className="mt-24 max-sm:px-2 px-20 space-y-8" >
            <div className="" id="apiUser">
                <div className="sobre">
                    <div className="text-2xl">
                        <h1>Api User</h1>
                    </div>
                    <div className="text-justify">
                        Um sistema eficiente para consumir API, desenvolvido utilizando o framework Spring Boot em conjunto com o MongoDB. Este sistema foi cuidadosamente construído para oferecer uma fluidez, permitindo a interação com diversas API por meio da poderosa tecnologia Spring Boot, combinada com a flexibilidade e escalabilidade do MongoDB.
                    </div>
                </div>
            </div>
            <div className="">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Visão Geral</h2>
                        </div>
                        <div className="font-semibold">
                            O produto:
                        </div>
                        <div className="text-justify">
                            API desenvolvida utilizando Spring Boot e MongoDB, prontamente consumida no ambiente React com TypeScript.
                        </div>
                        <div className="font-semibold">O objetivo:</div>
                        <div className="text-justify">
                            O objetivo é proporcionar uma experiência de aprendizado abrangente sobre como consumir APIs, oferecendo insights valiosos e conhecimentos práticos nesse processo essencial para o desenvolvimento de software.
                        </div>
                        <div className="font-semibold">Minha função:</div>
                        <div className="text-justify">
                            Desenvolvedor Full Stack
                        </div>
                    </div>


                    <div className="space-y-2">
                        <div className="text-xl">
                            <h2 className="font-bold">Visão</h2>
                        </div>
                        <div className="font-semibold">Imagens do resultado:</div>
                        <div className="sm:flex">
                            <img src={index} alt="tela do projeto" className="w-80" />
                            <img src={Cad} alt="tela do projeto" className="w-80" />
                            <img src={Alt} alt="tela do projeto" className="w-80" />
                        </div>

                        <div className="font-semibold">Sobre:</div>
                        <div className="descriacao">
                            O sistema utiliza uma API para registrar usuários, solicitando informações como nome e email. Esses dados são então inseridos no banco de dados por meio da API local.
                        </div>

                        <div className="font-semibold">Repositório:</div>
                        <div className="descriacao">
                            O repositório está alocado no GitHub.
                        </div>
                        <div className="descriacao">
                            <a href="https://github.com/andre-albuquerque01/ReactTs_Api_SpringBoot_User.git"
                                target="_blank" rel="noopener noreferrer" className="text-orange-500">Link para o repositório</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
