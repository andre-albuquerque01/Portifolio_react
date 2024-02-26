import iconsGitHub from '../img/iconsGithub.png'
import iconsLinjedin from '../img/linkedin.svg'

export default function Footer() {
    function data(){
        const data = new Date()
        return data.getFullYear();
    }
    return (
        <footer>
            <section className="bg-black h-full mt-10 bottom-0" id='contact'>
                <div className="flex justify-evenly text-white">
                    <div className="w-2/5 space-y-3 mt-8">
                        <h1 className="text-2xl">André Albuquerque</h1>
                        <p>A full-stack developer focused on web Applications, building web Applications to facilitate life.</p>
                    </div>
                    <div className="w-2/5 text-right text-2xl space-y-3 mt-8">
                        <h1>Social media</h1>
                        <div className="flex justify-end space-x-4">
                            <a href="https://github.com/andre-albuquerque01" target="_blank" rel="noopener noreferrer">
                                <img src={iconsGitHub} alt="" className='w-10' title='GitHub' />
                            </a>
                            <a href="https://www.linkedin.com/in/andr%C3%A9-albuquerque-4990091b1/" target="_blank" rel="noopener noreferrer">
                                <img src={iconsLinjedin} alt="" className='w-8' title='Linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 rounded-sm border-white w-1/2 mx-auto my-4 mt-8"></div>
                <div className='text-white text-center text-xs'>&copy;Copyright - {data()}. By Take the Phone</div>
            </section>
        </footer>
    )
}