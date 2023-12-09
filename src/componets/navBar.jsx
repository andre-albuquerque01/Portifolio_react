
function NavBar() {


    return (
<nav className='bg-white z-10 w-full fixed top-0'>
    <div className="flex justify-between items-center h-16 border border-b max-sm:block ">
        <div className="flex justify-center items-center text-center w-1/4 max-sm:w-full">
            <h1 className="font-bold max-sm:mt-1">André Albuquerque</h1>
        </div>
        <div className="sm:w-1/4 max-sm:w-full">
            <ul className="flex space-x-3 max-sm:justify-center max-sm:mt-1">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    </div>
</nav>

    );
}
export default NavBar;