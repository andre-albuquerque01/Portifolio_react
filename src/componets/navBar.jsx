import imgPerfil from '../img/logo.jpg'
import { useState } from 'react'
import iconMenu from '../img/iconMenu.svg'

function NavBar() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <nav className='bg-white w-full fixed top-0'>
            <div className="flex justify-between items-center h-16 border border-b">
                <div className="flex justify-center items-center text-center w-1/4">
                    <div className="px-3">
                    </div>
                    <h1>André Albuquerque</h1>
                </div>
                <div className="list sm:w-1/4 max-sm:w-full">
                    <div className={`sm:hidden justify-end ${active ? 'flex' : 'flex'}`}>
                        <div onClick={toggleMenu}>
                            <img src={iconMenu} alt="Menu Icon" className="w-6 h-6" />
                        </div>
                    </div>
                    <ul className={`sm:flex sm:w-1/2 justify-center list-none space-x-3 ${active ? 'flex space-x-3 h-10 items-center absolute mt-5 bg-white' : 'hidden'}`}>
                        <li><a href="home#home" onClick={() => { setActive(false) }}>HOME</a></li>
                        <li><a href="home#about" onClick={() => { setActive(false) }}>ABOUT</a></li>
                        <li><a href="home#projects" onClick={() => { setActive(false) }}>PROJECTS</a></li>
                        <li><a href="#contact" onClick={() => { setActive(false) }}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
