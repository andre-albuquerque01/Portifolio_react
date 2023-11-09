import ifomeImg from '../img/ifome.png'
import donation from '../img/donation.png'
import bookStore from '../img/bookStore.png'
import apiUser from '../img/ApiUser.png'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <section className="border border-t-2 border-b-0" id="projects">
            <div className="text-center mt-20">
                <div className="text-4xl">
                    <h1>PROJECTS</h1>
                </div>
                <div className="border-t-4 rounded-sm border-blue-500 w-16 mx-auto my-4 "></div>
                <div className="mt-5">
                    <p>Here you will find some of the personal projects that I created with each project containing its own case study</p>
                </div>
            </div>
            <div className='sm:flex justify-center'>
                <div className=' sm:w-2/5'>
                    {/* IFOME */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                        <div className="flex justify-center">
                            <img src={ifomeImg} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <h1 className='text-xl'>Ifome</h1>
                            <p className='text-center'>A case study for the implementation of a digital menu, as with the advancement of technology, there is a need to innovate.</p>
                            <div className="justify-start">
                                <Link to="/ifome" className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">IFOME</Link>

                            </div>
                        </div>
                    </div>

                    {/* Donation */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                        <div className="flex justify-center">
                            <img src={donation} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-3/4 space-y-4">
                            <h1 className='text-xl'>Donation</h1>
                            <p className='text-center'>As technology advances, there is a growing need to innovate in the implementation of NGO donation processes, making it a case study.</p>
                            <div className="">
                                <Link to='/donation' className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">Donation</Link>
                            </div>
                        </div>
                    </div>
                    {/* BookStore */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                    <div className="flex justify-center">
                            <img src={bookStore} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <h1 className='text-xl'>BookStore</h1>
                            <p className='text-center'>A case study for a bookstore, aiming to transform the way books are accessed by transitioning to a digital format, eliminating the need for a physical book inventory available for immediate withdrawal.</p>
                            <div className="justify-start">
                                <Link to='/bookstore' className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">BookStore</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second part */}
                <div className='sm:w-2/5'>
                    {/* ApiUser */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                        <div className="flex justify-center">
                            <img src={apiUser} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <h1 className='text-xl'>Api User</h1>
                            <p className='text-center'>A study on how to consume APIs and create an API using Spring Boot with MongoDB.</p>
                            <div className="justify-start">
                                <Link to="/apiUser" className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">Api User</Link>

                            </div>
                        </div>
                    </div>
                    {/* Donation */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                        <div className="flex justify-center">
                            <img src={donation} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <h1 className='text-xl'>Donation</h1>
                            <p className='text-center'>As technology advances, there is a growing need to innovate in the implementation of NGO donation processes, making it a case study.</p>
                            <div className="">
                                <Link to='/donation' className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">Donation</Link>
                            </div>
                        </div>
                    </div>
                    {/* BookStore */}
                    <div className="flex flex-col items-center text-center mt-20 space-y-2">
                        <div className="flex justify-center">
                            <img src={bookStore} alt="tela do projeto" className="w-80" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <h1 className='text-xl'>BookStore</h1>
                            <p className='text-center'>A case study for a bookstore, aiming to transform the way books are accessed by transitioning to a digital format, eliminating the need for a physical book inventory available for immediate withdrawal.</p>
                            <div className="justify-start">
                                <Link to='/bookstore' className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600">BookStore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects